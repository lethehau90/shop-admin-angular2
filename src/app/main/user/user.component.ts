import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
    public pageIndex: number = 1;
    public pageSize: number = 12;
    public pageDisplay: number = 10;
    public totalRow: number;
    public filter: string = "";
    public users: any[];
    public entity: any;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadUser()
    }

    loadUser(): void {
        this.dataService.get('/api/appUser/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter)
            .subscribe((response: any) => {
                this.users = response.Items
            })
    }

    showAddModel(): void {
        this.entity = {}
        this.modalAddEdit.show();
    }

}
