import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentUser: firebase.User;

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {
    this.currentUser = authProvider.currentUser();  
  }

}
