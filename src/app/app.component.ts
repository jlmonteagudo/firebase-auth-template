import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyBelKEkS_wdiDbBxksjeozKsFjxjG72pRM",
  authDomain: "auth-template-f0b9b.firebaseapp.com",
  databaseURL: "https://auth-template-f0b9b.firebaseio.com",
  storageBucket: "auth-template-f0b9b.appspot.com",
  messagingSenderId: "210949618743"
};


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform) {

    this.initializeFirebase();

    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

  }

  initializeFirebase() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      //this.rootPage = user ? HomePage : LoginPage;
    });

  }


}
