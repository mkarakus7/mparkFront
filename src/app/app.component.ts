import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'client';
  
  constructor( private basServ: BasketService, private accServ: AccountService){

  }

  ngOnInit(): void {
  this.loadBasket();
  this.loadCurrentUser();

  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    //if(token) {
      this.accServ.loadCurrentUser(token)
        .subscribe( ()=> {
          console.log('kullanıcı yüklendi');
        }, error=> {
          console.log(error);
        });
    

  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if(basketId) {
      this.basServ.getBasket(basketId).subscribe(()=>{
        console.log('sepet başladı..');
      }, error => {
        console.log(error);
      });
    }
  }

  

  

}
