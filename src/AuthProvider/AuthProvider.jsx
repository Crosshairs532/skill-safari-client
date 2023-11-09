import { createContext, useEffect, useState } from "react";
import helmet from "helmet";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Config/firebase.config";
export const AuthContext = createContext();
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const SignInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser, "User Loggin in");
            setUser(currentUser)
            setLoading(false)
            const loggesuser = { email: currentUser?.email }
            if (currentUser) {

                axios.post(`https://job-seeking-server-eight.vercel.app/jwt`, loggesuser, { withCredentials: true })
                    .then(res => console.log(res.data))
            }
            else {
                axios.post('https://job-seeking-server-eight.vercel.app/logout', loggesuser, { withCredentials: true })
                    .then(res => console.log(res.data))
            }

        })
        return () => Unsubscribe();
    }, [])


    const authInfo = { helmet, createUser, logIn, user, isLoading, logout, SignInGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );

};

export default AuthProvider;
// AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired, // Ensure children is a valid React node
// };

