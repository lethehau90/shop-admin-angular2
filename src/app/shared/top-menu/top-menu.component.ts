import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from '../../core/domain/loggedin.user'
import { BaseComponent } from 'app/core/base/component.base';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent extends BaseComponent {
    constructor() {super() }
     public user: LoggedInUser;
     public baseFolder : any;

    ngOnInit() {
    
    this.baseFolder  = this._systemConstants.BASE_API;
    this.user = this._authenService.getLoggedInUser();
    }

}
