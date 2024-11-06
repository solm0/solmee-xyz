import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyDrB0YOHNBvSrp-Q5zRmwLYBubrWr5q-24",
    authDomain: "blog-newsletter-b4d27.firebaseapp.com",
    databaseURL: "https://blog-newsletter-b4d27-default-rtdb.firebaseio.com",
    projectId: "blog-newsletter-b4d27",
    storageBucket: "blog-newsletter-b4d27.firebasestorage.app",
    messagingSenderId: "654199240630",
    appId: "1:654199240630:web:30697acbdd54be5ad8f317"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize database once
const auth = getAuth(app); // Initialize auth once

export default function TextInput() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Sign in anonymously, then submit email
        try {
            await signInAnonymously(auth); // Authenticate anonymously
            console.log("Signed in anonymously");

            const emailRef = ref(database, 'emails/' + Date.now()); // Generate a unique reference
            await set(emailRef, { content: email }); // Set email in the database
            alert('Email sent successfully!');
            setEmail(''); // Clear input after submission
        } catch (error) {
            console.error("Error during submission:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your email..."
            />
            <button className='sendbutton' onClick={handleSubmit}>Send</button>
        </div>
    );
}