import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent  implements OnInit {
@ViewChild('loginImage',{static:false}) loginImage:any
  constructor(
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {}
  ngAfterViewInit() {
    this.animateImage();
  }
  animateImage() {
    const imageAnimation = this.animationCtrl
      .create()
      .addElement(this.loginImage.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.55, transform: 'scale(1.2)', opacity: '1.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ])
      .duration(6000)
      .iterations(Infinity);

    imageAnimation.play();
  }
}
