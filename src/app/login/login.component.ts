import { Component } from '@angular/core';
import { BaseComponent } from '../core/base/component.base';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent {
  loading = false
  model: any = {};
  returnUrl: string

  constructor() { 
      super()
    }

  ngOnInit() {
  }

  Login() {
    this.loading = true
    this._authenService.login(this.model.username, this.model.password).subscribe(data => {
      this._router.navigate([this._urlConstants.HOME]);
    }, error => {
      this._notificationService.printErrorMessage(this._messageContstants.SYSTEM_ERROR_MSG);
      this.loading = false;
    })
  }
}
