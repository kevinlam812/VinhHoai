import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/base.component';
import { CreateOrEditOrderDto } from 'src/app/shared/service/order/models';
import { OrderService } from 'src/app/shared/service/order/service';
import { CreateOrEditOrderDetailDto } from 'src/app/shared/service/orderdetail/models';
import { OrderDetailService } from 'src/app/shared/service/orderdetail/service';
import { GetProductDto } from 'src/app/shared/service/product/models';
import { ProductService } from 'src/app/shared/service/product/service';

@Component({
  templateUrl: 'product-detail.component.html',
  styleUrls: [
    'product-detail.component.css',
    'css/aos.css',
    'css/login_register-css.css',
    'css/style.css',
    'css/util.css',
  ]
})

export class ProductDetailComponent extends AppBaseComponent implements OnInit {
  get id(): string{
    return this.getParamId('id');
  }
  public vn: GetProductDto= new GetProductDto();
  public vm: CreateOrEditOrderDto= new CreateOrEditOrderDto();
  //public od: CreateOrEditOrderDetailDto= new CreateOrEditOrderDetailDto();
  constructor(injector: Injector,
    private readonly _productservice: ProductService,
    private readonly _orderdetailservice: OrderDetailService,
    private readonly _orderservice: OrderService) {
    super(injector)
   }

  ngOnInit(): void {
    //this.vm.orderdate= new Date;
    //this._orderservice.saveByInput( this.vm).subscribe();
    this._productservice.getById(this.id).subscribe(data =>
      {
        this.vn = data;
      })
   }

   onClickaddtoCart(){
    //  this.od.orderId = 'BCC38E33-E8B1-496A-AF19-BBC3C2533D86'
    //  this.od.ordername = this.vn.productname
    //  this.od.quantity = 1
    //  this.od.price = this.od.quantity * this.vn.price
    //  this._orderdetailservice.saveByInput(this.od).subscribe(data =>{});
     this.redirect('payment/check-out')
   }
}
