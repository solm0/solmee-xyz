import { auth, database } from '../scripts/firebaseConfig';
import { ref, set } from 'firebase/database';
import { signInAnonymously } from 'firebase/auth';
import { useState } from 'react';

export default function TextInput() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAnonymously(auth); // Authenticate anonymously
            const emailRef = ref(database, 'emails/' + Date.now()); // Generate a unique reference
            await set(emailRef, { content: email }); // Set email in the database
            alert('Email sent successfully!');
            setEmail(''); // Clear input after submission
        } catch (error) {
            console.error("Error during submission:", error);
        }
    };

    return (
        <div className='newsletter'>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your email..."
            />
            <button className='send-button' onClick={handleSubmit}>Send</button>
        </div>
    );
}