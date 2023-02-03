import gojo from '../resources/images/gojo.jpg';


import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ( { children}) => {
    const [ currentUser, setCurrentUser ] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        setCurrentUser({
            id:1,
            name: "Krunal Makwana",
            profilePic: gojo,
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing",  
        });
    };
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
};