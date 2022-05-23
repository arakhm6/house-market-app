import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAf1rqp3P-Y0t-qGzZ58l0qX8mBawTB-4o',
  authDomain: 'house-market-app-331bf.firebaseapp.com',
  projectId: 'house-market-app-331bf',
  storageBucket: 'house-market-app-331bf.appspot.com',
  messagingSenderId: '21000839245',
  appId: '1:21000839245:web:11af406ea7edf765d0bc04',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
