import { createContext, useState } from "react";

import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, signInWithPopup, GithubAuthProvider, GoogleAuthProvider
} from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebaseSettings.js'

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null)

  const [user, setUser] = useState(null)

  const [theme, setTheme] = useState("light")

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

  const provider = new GithubAuthProvider()

  const signInWithGitHub = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
        setAuthToken(result.user.accessToken)
        console.log("GitHub ile oturum açıldı:", user);
        if (user) {
          window.location = "/homepage"
        }
      })
      .catch((error) => {
        console.error("GitHub ile oturum açma hatası:", error);
      });
  };

  const signInWithGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(data)
      const token = credential.accessToken;
      const user = data.user;
      
      if (user) {
        window.location = "/homepage"
      }
    }
    catch (error) {
      const credential = GoogleAuthProvider.credentialFromError(error);
      toast.error(credential)
    }
  };


  return (
    <FirebaseContext.Provider
      value={{
        authToken,
        user,
        register,
        login,
        handleLogout,
        changeTheme,
        signInWithGitHub,
        signInWithGoogle
      }}
    >
      {children}
      <ToastContainer />
    </FirebaseContext.Provider>

  )
}

export default FirebaseContext