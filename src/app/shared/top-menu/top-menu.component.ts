import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../core/services/authen.service';
import { UtilityService } from '../../core/services/utility.service';
import { UrlConstants } from '../../core/common/url.constants';
import { LoggedInUser } from '../../core/domain/loggedin.user'

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
    public user: LoggedInUser;
    constructor(private utilityService: UtilityService, private authenService: AuthenService) { }

    ngOnInit() {
        this.user = this.authenService.getLoggedInUser()
    }

}
