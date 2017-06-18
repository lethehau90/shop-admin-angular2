import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BaseComponent } from 'app/core/base/component.base';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent extends BaseComponent implements OnInit {

  @ViewChild('addEditModal') public addEditModal: ModalDirective;
  public totalRow: number;
  public pageIndex: number = this._pageConstants.pageIndex;
  public pageSize: number = this._pageConstants.pageSize;
  public pageDisplay: number = this._pageConstants.pageDisplay;
  public filter: string = '';
  public entity: any;

  public announcements: any[];

  constructor() {
    super();
  }

  ngOnInit() {
    this.search();
  }
  //Load data
  public search() {
    this._dataService.get('/api/announcement/getall?pageIndex='
      + this.pageIndex + '&pageSize='
      + this.pageSize)
      .subscribe((response: any) => {
        this.announcements = response.Items;
        this.pageIndex = response.PageIndex;
      }, error => this._dataService.handleError(error));
  }
  //Show add form
  public showAdd() {
    this.entity = {};
    this.addEditModal.show();
  }
  //Show edit form
  public showEdit(id: number) {
    this.entity = this.announcements.find(x => x.ID == id);
    this.addEditModal.show();
  }
  //Action delete
  public deleteConfirm(id: string): void {
    this._dataService.delete('/api/announcement/delete', 'id', id).subscribe((response: any) => {
      this._notificationService.printSuccessMessage(this._messageContstants.DELETED_OK_MSG);
      this.search();
    }, error => this._dataService.handleError(error));
  }
  //Click button delete turn on confirm
  public delete(id: string) {
    this._notificationService.printConfirmationDialog(this._messageContstants.CONFIRM_DELETE_MSG, () => this.deleteConfirm(id));
  }
  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      this._dataService.post('/api/announcement/add', JSON.stringify(this.entity)).subscribe((response: any) => {
        this.search();
        this.addEditModal.hide();
        this._notificationService.printSuccessMessage(this._messageContstants.CREATED_OK_MSG);
      }, error => this._dataService.handleError(error));
    }

  }
  public pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.search();
  }
}