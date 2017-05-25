import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NotificationService } from '../../core/services/notification.service';
import { MessageContstants } from '../../core/common/message.constants';

import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
declare var moment: any;

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
    

    constructor(private dataService: DataService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.loadRoles();
        this.loadData();
    }

    loadData(): void {
        this.dataService.get('/api/appUser/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter)
            .subscribe((response: any) => {
                console.log(response)
                this.users = response.Items;
                this.pageIndex = response.PageIndex;
                this.pageSize = response.PageSize;
                this.totalRow = response.TotalRows;
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

    loadIdUser(id: any): void {
        this.dataService.get('/api/appUser/detail/' + id).subscribe((response: any[]) => {
            this.modalAddEdit.show();
            this.entity = response;
            console.log(this.entity)
            for (let role of this.entity.Roles) {
                this.myRoles.push(role);
            }
            this.entity.BirthDay = moment(new Date(this.entity.BirthDay)).format('DD/MM/YYYY');
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

    showEditModel(id: any): void {
        this.loadIdUser(id);
    }

    public selectGender(event) {
        this.entity.Gender = event.target.value
    }

    saveChange(valid: boolean) {
        if (valid) {
            if (this.entity.id === undefined) {
                this.dataService.post('/api/appUser/add', JSON.stringify(this.entity)).subscribe((response: any) => {
                    this.notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
                    this.loadData();
                    this.modalAddEdit.hide();
                }, error => this.dataService.handleError(error))
            }
            else {
                this.dataService.put('/api/appUser/update', JSON.stringify(this.entity)).subscribe((response: any) => {
                    this.notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
                    this.loadData();
                    this.modalAddEdit.hide();
                }, error => this.dataService.handleError(error))
            }
        }
    }

    deleteItem(id: any) {
        this.notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, () => this.deleteItemUserId(id));
    }
    deleteItemUserId(id: any) {
        this.dataService.delete('/api/appUser/delete', 'id', id).subscribe((response: any) => {
            this.loadData();
            this.notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG)
        })
    }
}
