import { createContext, useState, useEffect } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebaseSettings.js'

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null)
  const [user, setUser] = useState(null)

  const [theme,setTheme] = useState("light")

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }

  const register = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      setUser(result.user)
      setAuthToken(result.user.accessToken)
    } catch (error) {
      console.log('sign error:', error)
      toast.error(` ${error.message}`);

    }
  }
  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      setUser(result.user)
      setAuthToken(result.user.accessToken)
    } catch (error) {
      console.log('sign error:', error)
      toast.error(` ${error.message}`);

    }
  }

  const handleLogout = async () => {
    toast.success('Çıkış işlemi gerçekleştiriliyor...')
    await signOut(auth)
    setTimeout(() => {
      window.location = "/"
    }, 5000)
  }
 

  return (
    <FirebaseContext.Provider
      value={{
        authToken,
        user,
        register,
        login,
        handleLogout,
        changeTheme
      }}
    >
      {children}
      <ToastContainer />
    </FirebaseContext.Provider>

  )
}

export default FirebaseContext