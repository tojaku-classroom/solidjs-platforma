import { createSignal } from "solid-js";
import { auth } from "../lib/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged, 
    updateProfile, 
    sendPasswordResetEmail, 
    sendEmailVerification
} from "firebase/auth";