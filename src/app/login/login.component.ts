import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '../core/services/authen.service';
import { NotificationService } from '../core/services/notification.service'
import { MessageContstants } from '../core/common/message.constants'
import { UrlConstants } from '../core/common/Url.constants'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false
  model: any = {};
  returnUrl: string

  constructor(private authenService: AuthenService,
    private notificationService: NotificationService, private router: Router) { }

  ngOnInit() {
  }

  Login() {
    this.loading = true
    this.authenService.login(this.model.username, this.model.password).subscribe(data => {
      this.router.navigate([UrlConstants.HOME]);
    }, error => {
      this.notificationService.printErrorMessage(MessageContstants.SYSTEM_ERROR_MSG);
      this.loading = false;
    })
  }
}
