import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
	apiKey: 'AIzaSyDFLvYq3X5Vnc55CXpsavDDjPJ8UmFT1mg',
	authDomain: 'pokemon-e6cdb.firebaseapp.com',
	databaseURL: 'https://pokemon-e6cdb.firebaseio.com',
	projectId: 'pokemon-e6cdb',
	storageBucket: 'pokemon-e6cdb.appspot.com',
	messagingSenderId: '108669938598',
	appId: '1:108669938598:web:f47b26a32fc4dd0d8fbd67',
});

export const db = firebase.firestore();
