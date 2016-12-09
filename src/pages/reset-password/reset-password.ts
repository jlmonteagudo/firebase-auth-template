import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {

  email: string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public authProvider: AuthProvider) {}

  resetPassword() {
    this.authProvider.resetPassword(this.email)
      .then(
        () => {
          this.alertCtrl.create({ title : 'Reset Password', message: "You will receive an email with instructions to reset your password", buttons: ['OK']}).present();
          this.navCtrl.push(LoginPage);
        }, 
        (error: Error) => this.alertCtrl.create({ title : 'Error', message: error.message, buttons: ['OK']}).present()
      );
  }

}
