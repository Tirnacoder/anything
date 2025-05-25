import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData
} from "firebase/firestore"

// your exact config
const firebaseConfig = {
  apiKey: "AIzaSyCWx78Al6ztNGatYIAe213TviW6RQAjyoU",
  authDomain: "music-tech-insider.firebaseapp.com",
  projectId: "music-tech-insider",
  storageBucket: "music-tech-insider.firebasestorage.app",
  messagingSenderId: "526379215582",
  appId: "1:526379215582:web:c84f6b4d15df0bcd14704f",
  measurementId: "G-5ZQ8T5XY09"
}

// ensure we only init on client
let app, analytics, db
if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig)
  analytics = getAnalytics(app)
  db = getFirestore(app)
}

// helper to add a document
export async function addData(
  collectionName: string,
  data: Record<string, any>
): Promise<string> {
  if (!db) throw new Error("Firebase not initialized")
  const docRef = await addDoc(collection(db, collectionName), data)
  return docRef.id
}

// helper to read all documents
export async function readData<T = any>(
  collectionName: string
): Promise<Array<{ id: string } & T>> {
  if (!db) throw new Error("Firebase not initialized")
  const snapshot = await getDocs(collection(db, collectionName))
  return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
    id: doc.id,
    ...(doc.data() as T)
  }))
}

// export db in case you need it elsewhere
export { db, analytics }
