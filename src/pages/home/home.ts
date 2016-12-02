import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import { User } from '../../models/user-model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentUser: User;

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {
    this.currentUser = authProvider.currentUser();  
  }

}
