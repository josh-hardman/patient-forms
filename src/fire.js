import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyBqUPD_xWTRePndP8nBsRtPuMaJuqVJy-8',
  authDomain: 'practice-forms.firebaseapp.com',
  databaseURL: 'https://practice-forms.firebaseio.com',
  projectId: 'practice-forms',
  storageBucket: 'practice-forms.appspot.com',
  messagingSenderId: '723844191355'
}
var fire = firebase.initializeApp(config)
export default fire
