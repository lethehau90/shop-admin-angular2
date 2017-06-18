import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        $(document).ready(function () {
            $.getScript('../assets/js/custom.js');
        });
    }

    constructor() {

    }

}
