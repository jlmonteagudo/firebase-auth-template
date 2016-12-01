import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {

  auth: firebase.auth.Auth;

  constructor() {
    this.auth = firebase.auth();
  }
  
  login(email: string, password: string): firebase.Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  
  signUp(email: string, password: string): firebase.Promise<any> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string): firebase.Promise<any> {
    return this.auth.sendPasswordResetEmail(email);
  }

  logout(): firebase.Promise<any> {
    return this.auth.signOut();
  }

}
