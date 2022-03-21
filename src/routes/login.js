import React from "react";
import { useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import Navbar from "../components/Navbar";

export default function Login(){

    // state = {isSignedIn: false}

    firebase.initializeApp({
        "projectId": "projet-iutlpdim-lefief",
        "appId": "1:951546668659:web:2ad5cb285cdf326907ac06",
        "storageBucket": "projet-iutlpdim-lefief.appspot.com",
        "locationId": "us-central",
        "apiKey": "AIzaSyA14qsvK53FuIbZ4wMFP_VZP2WA977eHso",
        "authDomain": "projet-iutlpdim-lefief.firebaseapp.com",
        "messagingSenderId": "951546668659",
        "measurementId": "G-TX1G506K6P"
      });
    
    var configUi = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: function() {
                window.history.back();
                return false;
            }
    }
}

    // componentDidMount = () => {firebase.auth().onAuthStateChanged(user => {this.setState({ isSignedIn: !!user })})

    return(
        <div>
            <h2 className="text-center my-10">
                Se connecter
            </h2>
            <StyledFirebaseAuth 
                uiConfig={configUi}
                firebaseAuth={firebase.auth()}
            />
            
        </div>
        
    )
}