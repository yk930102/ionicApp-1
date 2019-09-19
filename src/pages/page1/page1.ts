import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  // template:` <ion-list>
  //     <ion-list-header>Ionic3</ion-list-header>
  //     <button ion-item (click)="close()">Learn Ionic</button>
  //     <button ion-item (click)="close()">Documentation</button>
  //     <button ion-item (click)="close()">Showcase</button>
  //     <button ion-item (click)="close()">GitHub Repo</button>
  // </ion-list>`
})

export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    console.log(navParams)
    console.log(this.navParams.data.contentEle)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
