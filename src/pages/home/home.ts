import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('popoverContent') content: ElementRef;
  @ViewChild('popoverText') text: ElementRef;
  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController) {

  }
  presentPopover(myEvent) {
    console.log(this.content,this.text)
    let popover = this.popoverCtrl.create('Page1Page',{
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });
    // let popover = this.popoverCtrl.create(Page1Page);
    popover.present({
      // ev: myEvent
    });
  }
}
