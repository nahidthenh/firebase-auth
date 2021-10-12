import { useEffect, useState } from "react"
import initailizeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";


initailizeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // Google SignIn Popup 
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    // Github SignIn popup 
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    // LogOut SignIn Popup 
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        logout
    }

}

export default useFirebase