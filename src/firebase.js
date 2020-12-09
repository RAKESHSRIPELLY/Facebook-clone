import firebase, { firestore } from 'firebase';

    const firebaseConfig = {
        apiKey: "AIzaSyCP-RJR7aJVaQuzuwP8Sl5eRDS3Kb9rI3Q",
        authDomain: "facebook-8c280.firebaseapp.com",
        databaseURL: "https://facebook-8c280.firebaseio.com",
        projectId: "facebook-8c280",
        storageBucket: "facebook-8c280.appspot.com",
        messagingSenderId: "550837641391",
        appId: "1:550837641391:web:ca6f16095234ba229cb45a",
        measurementId: "G-74488Y8WSB"
      };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;