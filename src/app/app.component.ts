import {
    Component, AfterViewChecked,
    ElementRef, OnInit, AfterViewInit,
    AfterContentChecked, AfterContentInit,
    OnDestroy, DoCheck, OnChanges
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked, OnInit,AfterViewInit,OnDestroy,DoCheck,OnChanges {

    constructor(private elementRef: ElementRef) {
    }
    public i : number = 0;

    ngOnInit() {
        console.log('ngOnInit'+this.i+1)
    }


    ngAfterViewInit() {
      console.log('ngAfterViewInit')
    }

    ngOnDestroy(){
      console.log('ngOnDestroy')
    }


    ngDoCheck(){
      //console.log('ngDoCheck'+this.i+1)
    }

    ngOnChanges(){
      console.log('ngOnChanges')
    }


    ngAfterViewChecked() {
        // var s = document.createElement("script");
        // s.type = "text/javascript";
        // s.src = "../assets/js/custom.js";
        // this.elementRef.nativeElement.appendChild(s);
        //console.log('ngAfterViewChecked')
    }
}
