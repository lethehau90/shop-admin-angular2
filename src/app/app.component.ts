import { Component,AfterViewChecked, OnInit, ElementRef  } from '@angular/core';
import { debug } from 'util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked ,OnInit {
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit() {
        // $(document).ready(function () {
        //     $.getScript('../assets/js/custom.js');
        // });
    }

    ngAfterViewChecked() 
    {
        var existsScript = document.getElementById("customJS");
        if (existsScript != null) {
        //this.elementRef.nativeElement.removeChild(existsScript);
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
