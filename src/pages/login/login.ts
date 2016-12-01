import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import { User } from '../../models/user-model';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: User = { email: '', password: ''};

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public authProvider: AuthProvider) {}

  login() {
    this.authProvider.login(this.user.email, this.user.password)
      .then(
        (user: User) => this.navCtrl.setRoot(HomePage),
        (error: Error) => this.alertCtrl.create({ title : 'Error', message: error.message, buttons: ['OK']}).present()
      );
  }

  goToSignUp() {
    console.log('SIGN UP');
  }

  goToResetPassword() {
    console.log('RESET PASSWORD');
  }

}
