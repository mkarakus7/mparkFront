import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IOrder } from 'src/app/shared/models/order';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor(private basketServ: BasketService, 
            private checkoutServ: CheckoutService, 
            private router: Router,
            private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submitOrder() {
    const basket = this.basketServ.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    this.checkoutServ.createOrder(orderToCreate).subscribe( (order: IOrder) => {
      this.toastr.success('sipariş oluşturuldu');
      this.basketServ.deleteLocalBasket(basket.id);
      console.log(order);
      const navExt: NavigationExtras= { state:order};
      this.router.navigate(['checkout/success'], navExt);

    },  error => {
      this.toastr.error(error.message);
      console.log(error);
    });
    
  }
  private getOrderToCreate(basket: IBasket) {
    
    return { 
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm.get('deliveryForm').get('deliveryMethod').value,
      shipToAddress: this.checkoutForm.get('addressForm').value
    };
  }

}
