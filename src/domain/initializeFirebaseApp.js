import firebase from 'firebase'
import {config} from './config'

const {apiKey, authDomain, projectId} = config.FIREBASE

firebase.initializeApp({
  apiKey,
  authDomain,
  projectId
})

const initializeFirebaseApp = firebase.firestore()

export {initializeFirebaseApp}
