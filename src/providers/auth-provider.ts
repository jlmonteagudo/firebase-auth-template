import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { User } from '../models/user-model';

@Injectable()
export class AuthProvider {

  auth: firebase.auth.Auth;

  constructor() {
    this.auth = firebase.auth();
  }
  
  login(email: string, password: string): firebase.Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  
  signUp(user: User): firebase.Promise<any> {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((newUser: firebase.User) => {
        newUser.updateProfile({displayName: user.displayName, photoURL: newUser.photoURL});
      });
  }

  resetPassword(email: string): firebase.Promise<any> {
    return this.auth.sendPasswordResetEmail(email);
  }

  logout(): firebase.Promise<any> {
    return this.auth.signOut();
  }

  currentUser(): User {
    let user: any = firebase.auth().currentUser; 
    return user;
  }

}
