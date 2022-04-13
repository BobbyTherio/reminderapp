import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController) {}

  async firstAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'April 18, 2022',
      subHeader: 'Chris Burkard',
      message: 'In this presentation, you will learn everything about traveling and benefits related to it',
      buttons: ['OK']
    });
    await alert.present();
  }

  async secondAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'May 2, 2022',
      subHeader: 'Learn about Cryptocurrencies',
      message: 'In this presentation, you will learn everything about Cryptocurrencies',
      buttons: ['I will be there', 'Not attending']
    });
    await alert.present();
  }

  async thirdAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'May 3, 2022',
      subHeader: 'Learn about AWS',
      message: 'In this presentation, you will learn everything about AWS',
      buttons: ['OK']
    });
    await alert.present();
  }






}