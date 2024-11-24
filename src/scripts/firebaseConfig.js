import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

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
export const database = getDatabase(app); // Initialize database once
export const auth = getAuth(app); // Initialize auth once