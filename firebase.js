import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAcv4Y7TvRFrFuIiag8zIZ5UyI7HGUg6ck',
  authDomain: 'online-food-delivery-app-c7413.firebaseapp.com',
  projectId: 'online-food-delivery-app-c7413',
  storageBucket: 'online-food-delivery-app-c7413.appspot.com',
  messagingSenderId: '135054860404',
  appId: '1:135054860404:web:a80ab06f13d5f498b6f121',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
