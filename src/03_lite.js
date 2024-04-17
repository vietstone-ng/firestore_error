// use lite version of firestore

import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  initializeFirestore,
  collection,
  getDocs,
} from 'firebase/firestore/lite'

import firebaseConfig from './firebase_config'

const app = initializeApp(firebaseConfig)

// NOTE: both of these 2 initializations work
const firestore = getFirestore(app)
// const firestore = initializeFirestore(app, {
//   experimentalAutoDetectLongPolling: true,
// })

const fetchDocs = async () => {
  const collectionRef = collection(firestore, 'langages')
  const snapshot = await getDocs(collectionRef)
  return snapshot.docs
}

export default fetchDocs
