import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDcpdqsZIW-LR7b1z1c03zcsuEQBZ30zRg",
    authDomain: "pocketmoney-1556378819918.firebaseapp.com",
    projectId: "pocketmoney-1556378819918",
    storageBucket: "pocketmoney-1556378819918.appspot.com",
    messagingSenderId: "522065988201",
    appId: "1:522065988201:web:6b611e602d954d20f930f8",
    measurementId: "G-4K8ZHZPW74"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);