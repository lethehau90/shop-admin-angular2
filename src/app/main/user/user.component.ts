import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NotificationService } from '../../core/services/notification.service';
import { MessageContstants } from '../../core/common/message.constants';

import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;

    public myRoles: string[] = [];

    public pageIndex: number = 1;
    public pageSize: number = 12;
    public pageDisplay: number = 10;
    public totalRow: number;
    public filter: string = "";
    public users: any[];
    public entity: any;

    public allRoles: IMultiSelectOption[] = [];
    public roles = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadRoles();
        this.loadUser();
    }

    loadUser(): void {
        this.dataService.get('/api/appUser/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter)
            .subscribe((response: any) => {
                this.users = response.Items
            })
    }

    loadRoles() {
        this.dataService.get('/api/appRole/getlistall').subscribe((response: any[]) => {
            this.allRoles = [];
            for (let role of response) {
                this.allRoles.push({ id: role.Name, name: role.Description });
            }
        }, error => this.dataService.handleError(error));
    }

    public dateOptions: any = {
        locale: { format: 'DD/MM/YYYY' },
        alwaysShowCalendars: false,
        singleDatePicker: true
    };

    showAddModel(): void {
        this.entity = {}
        this.modalAddEdit.show();
    }

    public selectGender(event) {
        this.entity.Gender = event.target.value
    }

}
