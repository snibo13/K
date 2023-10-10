import React, { useContext, useState, useEffect, useRef, Context } from "react";
// import Realm from "realm";
// import app from "./Realm";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    const realmRef = useRef(null);

    useEffect(() => {

        // Create a web request to the realm uti
        

        return () => {
            // cleanup function
            const userRealm = realmRef.current;
            if (userRealm) {
                userRealm.close();
                realmRef.current = null;
            }
        };
    }, []);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
};

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useAuth = () => {
    const auth = useContext(AuthContext);
    if (auth == null) {
        throw new Error("useAuth() called outside of a AuthProvider?");
    }
    return auth;
};

export { AuthProvider, useAuth };