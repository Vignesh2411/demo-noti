import firebase from 'firebase'

const config = {

    apiKey: "AIzaSyC5ffRrFv520zn4BiVOYiGPoKEw1UPRWn4",
    authDomain: "fir-noti-83dbd.firebaseapp.com",
    databaseURL: "https://fir-noti-83dbd.firebaseio.com",
    projectId: "fir-noti-83dbd",
    storageBucket: "fir-noti-83dbd.appspot.com",
    messagingSenderId: "242462171500",
    appId: "1:242462171500:web:328848b23556de2d495349",
    measurementId: "G-E2EQGBTCB1"

}

firebase.initializeApp(config)

export default firebase