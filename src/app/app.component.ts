import { Component, AfterViewChecked, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
    constructor(private elementRef: ElementRef) {

    }


    // ngAfterViewChecked() {
    //     var s = document.createElement("script");
    //     s.type = "text/javascript";
    //     s.src = "../assets/js/custom.js";
    //     this.elementRef.nativeElement.appendChild(s);
    //   }

    ngAfterViewChecked() {
        var existsScript = document.getElementById("customJS");
        if (existsScript != null) {
            this.elementRef.nativeElement.removeChild(existsScript);
        }
        else {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "../assets/js/custom.js";
            s.id = "customJS";
            this.elementRef.nativeElement.appendChild(s);
        }

    }



}
