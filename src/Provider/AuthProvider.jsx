/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("");


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const githubProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    };

    const logout = () => {
        setLoading(true);
        signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            if (loggedUser) {
                axios
                    .post("http://localhost:5000/jwt", {
                        email: loggedUser.email,
                    })
                    .then((res) => {
                        localStorage.setItem(
                            "jm-mart-token",
                            res?.data?.token
                        );
                        setLoading(false);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                localStorage.removeItem("jm-mart-token");
                setLoading(false);
            }
        });
        return () => {
            unSubscribe();
        };
    },[auth]);

    const authInfo = {
        user,
        logout,
        signIn,
        loading,
        createUser,
        googleSignIn,
        githubSignIn,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
	return useContext(AuthContext);
};

export default AuthProvider;

