import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITEAUTH_DOMAIN,
  projectId: import.meta.env.PROJSECT_ID,
  storageBucket: import.meta.env.STOTAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDERID,
  appId: import.meta.env.APPID,
};

const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
