import { auth, database } from '../scripts/firebaseConfig';
import { ref, set, get } from 'firebase/database';
import { signInAnonymously } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function Guestbook() {
    const [input, setInput] = useState('');
    const [isComposing, setIsComposing] = useState(false);
    const [messages, setMessages] = useState([]);
    const [reloadFlag, setReloadFlag] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const now = new Date();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const currentDateTime = `${month}월 ${day}일 ${hours}:${minutes}`;

        if (!input || input.trim().length === 0) {
            console.error("Input is empty or invalid.");
            return;
        }

        try {
            await signInAnonymously(auth); // Authenticate anonymously
            const guestbookRef = ref(database, 'guestbooks/' + Date.now()); // Generate a unique reference
            await set(guestbookRef, { message: input, timestamp: currentDateTime}); // Set email in the database
            setInput('');
            setReloadFlag((prev) => !prev);
        } catch (error) {
            console.error("Error during submission:", error);
        }
    };

    const getMessages = async () => {
        try {
            const snapshot = await get(ref(database, 'guestbooks'));
            return snapshot.val();
        } catch (error) {
            console.error("Error during retrieval:", error);
        }
    }

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const messages = await getMessages(); // Await the result of getMessages
                setMessages(messages ? Object.values(messages).reverse() : []); // Convert to array if data exists
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
    
        fetchMessages();
    }, [reloadFlag]);

    return (
        <details className='guestbook'>
            <summary><strong>과제전 한정!</strong> 방명록 Guestbook</summary>
            <div className='guestbook-inside'>
                <div className="guestbook-messages">
                    {messages && (
                        Object.keys(messages).map((key) => (
                            <div key={key}>
                                <p className='message'>{messages[key].message}</p>
                            </div>
                        ))
                    )}
                </div>
                <textarea
                    type='text'
                    value={input}
                    wrap="soft"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='감상평이나 피드백을 적어주세요!'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !isComposing) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
                    onCompositionStart={() => setIsComposing(true)} // Track IME composition start
                    onCompositionEnd={() => setIsComposing(false)} // Track IME composition end
                />
            </div>
        </details>
    )
}