import {AfterViewInit, Directive, ElementRef} from '@angular/core';
import {GestureController} from '@ionic/angular';

@Directive({
    selector: '[appGesture]'
})
export class GestureDirective implements AfterViewInit {


    constructor(
        private el: ElementRef,
        private gestureCtrl: GestureController,
    ) {
    }

    ngAfterViewInit() {
        console.log('after view init', this.el)
        const gesture = this.gestureCtrl.create({
            el: this.el.nativeElement,
            threshold: 0,
            gestureName: 'app-long-press',
            onStart: (a) => {
                console.log('gesture started');
            }
        });
        gesture.enable(true);
    }

}
