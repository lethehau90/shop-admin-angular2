import { BaseComponent } from 'app/core/base/component.base';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent extends BaseComponent implements OnInit {
  public orderDetails: any[];
  public entity: any;
  public orderId: number;
  public baseFolder: string = this._systemConstants.BASE_API;

  constructor(private activatedRoute: ActivatedRoute) { super() }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.orderId = params['id'];
      this.loadOrder(this.orderId);

      this.loadOrderDetail(this.orderId);
    });
  }

  public goBack() {
    this._utilityService.navigate('/main/order/index');
  }

  public exportToExcel() {
    this._dataService.get('/api/order/exportExcel/' + this.orderId.toString()).subscribe((response: any) => {
      window.open(this.baseFolder + response.Message);
      console.log(this.baseFolder + response.Message)
    }, error => this._dataService.handleError(error));
  }
  public loadOrder(id: number) {
    this._dataService.get('/api/order/detail/' + id.toString()).subscribe((response: any) => {
      this.entity = response;
    }, error => this._dataService.handleError(error));
  }

  public loadOrderDetail(id: number) {
    this._dataService.get('/api/order/getalldetails/' + id.toString()).subscribe((response: any[]) => {
      this.orderDetails = response;
    }, error => this._dataService.handleError(error));
  }
}
