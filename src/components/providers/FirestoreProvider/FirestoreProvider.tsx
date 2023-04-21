import { createContext, useEffect, useState } from 'react'
import { Firestore, getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

export const FirestoreContext = createContext<Firestore | null>(null)

function FirestoreProvider ({
  children
}: {
  children: JSX.Element
}) {
  const [db, setDb] = useState<Firestore | null>(null)

  useEffect(() => {
    if (!db) {
      const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_ID,
        measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTS_ID
      }

      const app = initializeApp(firebaseConfig)
      setDb(getFirestore(app))
    }
  }, [db])

  return (
    <FirestoreContext.Provider value={db}>
      {children}
    </FirestoreContext.Provider>
  )
}

export default FirestoreProvider
