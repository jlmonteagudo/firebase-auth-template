import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import { User } from '../../models/user-model';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  user: User = { email: '', password: '', name: ''};

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public authProvider: AuthProvider) {}

  signup() {
    this.authProvider.signUp(this.user)
      .then(
        (user: User) => { 
          this.alertCtrl.create({ title : 'Sign up', message: "You have successfully signed up", buttons: ['OK']}).present();
          this.navCtrl.setRoot(HomePage)
        },
        (error: Error) => this.alertCtrl.create({ title : 'Error', message: error.message, buttons: ['OK']}).present()
      );
  }

}
