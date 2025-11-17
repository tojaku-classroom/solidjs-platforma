import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwcW_GBu3gCWiTFFgL7kuhpfE5_26NCFo",
  authDomain: "solidapp-obskc-tj.firebaseapp.com",
  projectId: "solidapp-obskc-tj",
  storageBucket: "solidapp-obskc-tj.firebasestorage.app",
  messagingSenderId: "667143003332",
  appId: "1:667143003332:web:8874f88c9c0be27046fd91"
};

export default app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);