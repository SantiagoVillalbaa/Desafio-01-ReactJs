import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqHi4lMLHPcaJoDSxARbvkOkA5Qn_a3HE",
  authDomain: "coderhouse-ecommerce-d7918.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d7918",
  storageBucket: "coderhouse-ecommerce-d7918.appspot.com",
  messagingSenderId: "520728405971",
  appId: "1:520728405971:web:7ce7433f6e674fffa67126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
