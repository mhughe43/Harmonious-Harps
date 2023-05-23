import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any[] = [];
  
  
constructor(private cartService: CartServiceService) {
    this.cartItems = cartService.getItems();
  }
  

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }


  calculateTotalPrice() {
    return this.cartService.calculateTotalPrice().toFixed(2);
  }

 

}
