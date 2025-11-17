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

// global state
export const [currentUser, setCurrentUser] = createSignal(null);
export const [isAuthenticated, setIsAuthenticated] = createSignal(false);
export const [authLoading, setAuthLoading] = createSignal(true);

onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
    setIsAuthenticated(!!user);
    setAuthLoading(false);

    if (user) {
        console.log("User OK", user);
    } else {
        console.log("NO User");
    }
});

export const authService = {
    async signUp(email, password, name = "") {
        try {
            // create user
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCred.user;

            // name update
            if (name.trim()) {
                await updateProfile(user, {
                    displayName: name.trim()
                    // TODO: additional user settings
                })
            }

            // email verification
            await sendEmailVerification(user);

            console.log("User signed up", user.email);
            return user;
        } catch (error) {
            console.error("Sign up error", error.code);
            throw this.getErrorMessage(error);
        }
    },
    async signIn(email, password) {

    },
    async signOut() {

    },
    async passwordReset(email) {

    },
    async updateName(name) {

    },
    async verify() {

    },
    getCurrentUser() {
        return auth.currentUser;
    },
    isUserAuthenticated() {
        return !!auth.currentUser;
    },
    isEmailVerified() {
        return auth.currentUser?.emailVerified || false;
    },
    getErrorMessage(error) {

    }
};