import { Component } from '@angular/core';
import { LoggedInUser } from '../core/domain/loggedin.user'
import { BaseComponent } from '../core/base/component.base';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent extends BaseComponent {
  public user: LoggedInUser;
  constructor() { super() }

  public baseFolder: any;
  ngOnInit() {

    setTimeout(() => {
      $(document).ready(() => {
        $.getScript('../assets/js/custom.js');
      });
    }, 0);

    this.baseFolder = this._systemConstants.BASE_API;
    this.user = this._authenService.getLoggedInUser();
  }

  logout() {
    localStorage.removeItem(this._systemConstants.CURRENT_USER);
    this._utilityService.navigate(this._urlConstants.LOGIN);
  }


}