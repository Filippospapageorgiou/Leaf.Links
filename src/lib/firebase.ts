import { initializeApp } from "firebase/app";
import { doc,getFirestore, onSnapshot } from "firebase/firestore";
import { type User, getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDYKsYdZcFLUfNy-Z4c8G-BPqlBozdJls",
  authDomain: "linktree-1ddc2.firebaseapp.com",
  projectId: "linktree-1ddc2",
  storageBucket: "linktree-1ddc2.appspot.com",
  messagingSenderId: "546522310296",
  appId: "1:546522310296:web:850f123dbcd946e12e12ed"
};

//initialize firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/*
* userStore
* @returns a store with the current firebase user
*/


function userStore() {
    let unsubscribe: () => void;
  
    if (!auth || !globalThis.window) {
      console.warn('Auth is not initialized or not in browser');
      const { subscribe } = writable<User | null>(null);
      return {
        subscribe,
      }
    }
  
    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
      unsubscribe = onAuthStateChanged(auth, (user) => {
        set(user);
      });
  
      return () => unsubscribe();
    });
  
    return {
      subscribe,
    };
}
export const user = userStore();

export function docStore<T>(
  path: string,
) {
  let unsubscribe: () => void;

  const docRef = doc(db, path);

  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
  };
}

interface UserData {
  username: string;
  bio: string;
  photoURL: string;
  links: any[];
}

export const userData: Readable<UserData | null> = derived(user, ($user, set) => { 
  if ($user) {
    return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
  } else {
    set(null); 
  }
});
