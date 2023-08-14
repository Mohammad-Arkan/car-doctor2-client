import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../../../firebase/firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
   
    const [user, setUser] = useState()

    const createUser = (email, password) => {
    return createUserWithEmailPassword(auth, email, password)
    }


    const authInfo = {
        user,
        createUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;