import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  myDate: any;

  constructor(public navCtrl: NavController) {

  }

  test() {
    alert(this.myDate)
  }
}
