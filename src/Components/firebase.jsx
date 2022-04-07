import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDLJh_z0Nk-qe96GXnBTHFjbBy2yN_QLgw",
    authDomain: "prime-video-clone-2d38d.firebaseapp.com",
    projectId: "prime-video-clone-2d38d",
    storageBucket: "prime-video-clone-2d38d.appspot.com",
    messagingSenderId: "334338149150",
    appId: "1:334338149150:web:b0751f7841a3756f4cd70f"
};
  
const firebaseApp = firebase.intilizeApp(firebaseConfig);
const auth = firebase.auth();
export {auth}