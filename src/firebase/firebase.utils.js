import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhfy-_dW4G-DsBNcZ2Mnb1ghCjl_0PPBg",
    authDomain: "electric-bikes-1b2e6.firebaseapp.com",
    databaseURL: "https://electric-bikes-1b2e6.firebaseio.com",
    projectId: "electric-bikes-1b2e6",
    storageBucket: "electric-bikes-1b2e6.appspot.com",
    messagingSenderId: "731383376288",
    appId: "1:731383376288:web:6f75ee2f91593eeb249cc5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


