import { auth, db } from "../firebase/config"
import { useContext, createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";


export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        console.log("error al crear el contexto");
    }
    return context;
}

export const AuthProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)

    const registrar = async (email, password, userName) => {
        const respuesta = await createUserWithEmailAndPassword(auth, email, password)
        const docRef = await addDoc(collection(db, "users"), {
            userName,
            userId: respuesta.user.uid,
            IsAdmin: false
        })
        console.log(respuesta);
        console.log(docRef);
    }

    const login = async (email, password) => {
        try {
            const respuesta = await signInWithEmailAndPassword(auth, email, password)
            const userId = respuesta.user.uid;
            const userQuery = query(collection(db, "users"), where("userId", "==", userId))
            const userQuerySnapshot = await getDocs(userQuery)
            if (!userQuerySnapshot.empty) {
                const userData = userQuerySnapshot.docs[0].data();
                const userName = userData.userName;
                const formattedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
                const userIsAdmin = userData.IsAdmin;
                setIsAdmin(userIsAdmin)
                setUsuario(formattedUserName)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const logout = async () => {
        const respuesta = await signOut(auth);
        setUsuario(null)
        setIsAdmin(false)
        console.log(respuesta);
    }


    return <AuthContext.Provider
        value={{
            registrar,
            login,
            logout,
            usuario,
            isAdmin,
        }}
    >
        {children}
    </AuthContext.Provider>
}