import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { BreadcrumbService} from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  quantity = 1;

  constructor(private shopServ: ShopService,
    private activRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private basServ: BasketService
    ) { 
      this.bcService.set('@productDetails',' ');
    }

  ngOnInit(): void {
    this.loadProduct();
  }


  addItemToBasket() {
    this.basServ.addItemToBasket(this.product, this.quantity);    
  }

  incrementQuantity() {
    this.quantity++;
  }
  
  decrementQuantity() {
    if(this.quantity> 1) {
         this.quantity--;
    }
  }


  loadProduct() {
    this.shopServ.getProduct
    (+this.activRoute.snapshot.paramMap.get('id'))
    .subscribe( product =>{
      this.product = product;
      this.bcService.set('@productDetails', product.name);
    }, error =>{
      console.log(error);
    });
  }

}