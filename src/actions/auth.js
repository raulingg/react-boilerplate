import { auth } from 'firebase';
import { googleAuthProvider } from '../firebase/firebase';

export const login = uid => ({
  type: 'LOGIN',
  uid,
});

export const startLogin = () => () => auth().signInWithPopup(googleAuthProvider);

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => () => auth().signOut();
