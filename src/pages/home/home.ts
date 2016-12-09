import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import { User } from '../../models/user-model';
import { LoginPage } from '../../pages/login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentUser: User;

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {
    this.currentUser = authProvider.currentUser();  
  }

  logout() {
    this.authProvider.logout()
      .then(() => this.navCtrl.setRoot(LoginPage));

  }

}
