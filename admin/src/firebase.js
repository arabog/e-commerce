// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.APP_KEY,

	authDomain: "e-shop-3edc1.firebaseapp.com",

	projectId: "e-shop-3edc1",

	storageBucket: "e-shop-3edc1.appspot.com",

	messagingSenderId: "293184397376",

	appId: "1:293184397376:web:25ca747d5e6b620706bfa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
