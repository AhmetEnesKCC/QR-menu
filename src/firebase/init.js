import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCUPKPsJuiMTs2YNkSGMElePV5BnkzuBbs",
  authDomain: "qr-menu-1ec05.firebaseapp.com",
  projectId: "qr-menu-1ec05",
  storageBucket: "qr-menu-1ec05.appspot.com",
  messagingSenderId: "1096877963682",
  appId: "1:1096877963682:web:50d949bd40a4d6d4c7dafb",
  measurementId: "G-GTHPCDYBK5",
};

export default function initFireBase() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  if (window && typeof window !== "undefined") {
    getAnalytics(app);
  }
  return { app, auth };
}

export { initFireBase };
