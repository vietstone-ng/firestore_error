// use compat version of firebase

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import firebaseConfig from './firebase_config'

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()

// NOTE: need this line to work
// firebase.firestore().settings({ experimentalAutoDetectLongPolling: true })

const fetchDocs = async () => {
  const collectionRef = firestore.collection('langages')
  const snapshot = await collectionRef.get()
  return snapshot.docs
}

export default fetchDocs
