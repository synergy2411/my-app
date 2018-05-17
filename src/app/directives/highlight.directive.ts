import { Directive, ElementRef, Renderer2, Input, HostListener, HostBinding } from '@angular/core';
import { AppComponent } from '../app.component';

@Directive({
    selector : '[myhighlight]'
})

export class HighlightDirective{
    @Input('defaultColor') defaultColor : string = "transparent";
    @Input('myNewColor') myColor : string;

    @HostBinding('style.backgroundColor') backgroundColor : any;

    @HostListener('mouseenter') mouseenter(eventData : any){
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elementRef.nativeElement,
        //     "background-color",
        //     this.defaultColor)
        // console.log("Mouse Enter : " + this.defaultColor);
    }
    @HostListener('mouseleave') mouseleave(eventData : any){
        this.backgroundColor = this.myColor;
        // this.renderer.setStyle(this.elementRef.nativeElement,
        //     "background-color",
        //     this.myColor)
        // console.log("Mouse leave : " + this.myColor);
    }

    constructor(private elementRef : ElementRef,
                private renderer : Renderer2
                ){
        //console.log(this.defaultColor);
        // this.renderer.setStyle(this.elementRef.nativeElement,
        //         "background-color",
        //         this.defaultColor)
        //this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }
}