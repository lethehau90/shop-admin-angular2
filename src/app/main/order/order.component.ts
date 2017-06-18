import { BaseComponent } from 'app/core/base/component.base';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Router } from '@angular/router';
declare var moment: any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent extends BaseComponent implements OnInit {

  /*Declare modal */
  @ViewChild('addEditModal') public addEditModal: ModalDirective;
  /*Product manage */
  public baseFolder: string = this._systemConstants.BASE_API;
  public totalRow: number;
  public pageIndex: number = this._pageConstants.pageIndex;
  public pageSize: number = this._pageConstants.pageSize;
  public pageDisplay: number = this._pageConstants.pageDisplay;

  public filterCustomerName: string = '';
  public filterStartDate: string = '';
  public filterPaymentStatus: string = '';
  public filterEndDate: string = '';

  public orders: any[];
  public dateOptions: any = {
    locale: { format: 'DD/MM/YYYY' },
    alwaysShowCalendars: false,
    singleDatePicker: true
  };
  constructor() {
    super()
  }

  ngOnInit() {
    this.search();

  }

  public search() {
    this._dataService.get('/api/order/getlistpaging?page=' + this.pageIndex
      + '&pageSize=' + this.pageSize + '&startDate=' + this.filterStartDate
      + '&endDate=' + this.filterEndDate + '&customerName=' + this.filterCustomerName
      + '&paymentStatus=' + this.filterPaymentStatus)
      .subscribe((response: any) => {
        this.orders = response.Items;
        this.pageIndex = response.PageIndex;
      }, error => this._dataService.handleError(error));
  }
  public reset() {
    this.filterCustomerName = '';
    this.filterEndDate = '';
    this.filterStartDate = '';
    this.filterPaymentStatus = '';
    this.search();
  }

  public delete(id: string) {
    this._notificationService.printConfirmationDialog(this._messageContstants.CONFIRM_DELETE_MSG, () => {
      this._dataService.delete('/api/order/delete', 'id', id).subscribe((response: any) => {
        this._notificationService.printSuccessMessage(this._messageContstants.DELETED_OK_MSG);
        this.search();
      }, error => this._dataService.handleError(error));
    });
  }
  public pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.search();
  }
  public changeStartDate(value: any) {
    this.filterStartDate = moment(new Date(value.end._d)).format('DD/MM/YYYY');
  }
  public changeEndDate(value: any) {
    this.filterEndDate = moment(new Date(value.end._d)).format('DD/MM/YYYY');
  }

}
