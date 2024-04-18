// use modular version of firebase

import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  initializeFirestore,
  collection,
  getDocs,
  setLogLevel,
} from 'firebase/firestore'

import firebaseConfig from './firebase_config'

const app = initializeApp(firebaseConfig)

// NOTE: none of these 2 initializations work
// const firestore = getFirestore(app)
setLogLevel('debug');
const firestore = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
})

const fetchDocs = async () => {
  const collectionRef = collection(firestore, 'langages')
  const snapshot = await getDocs(collectionRef)
  return snapshot.docs
}

export default fetchDocs
