import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface FireBaseState {
  firebaseApp: FirebaseApp | null;
  firebaseAuth: Auth | null;
  setFirebaseApp: (app: any) => void;
  setFirebaseAuth: (app: any) => void;
}

const useFirebaseState = create<FireBaseState>()(
  devtools(
    (set) => ({
      firebaseApp: null,
      firebaseAuth: null,
      setFirebaseApp: (app) => set((state) => ({ ...state, firebaseApp: app })),
      setFirebaseAuth: (auth) =>
        set((state) => ({ ...state, firebaseAuth: auth })),
    }),
    { name: "firebase-state" }
  )
);

export default useFirebaseState;
