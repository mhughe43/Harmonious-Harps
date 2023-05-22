import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartServiceService) { }

  cartItems: any[] = [];

  removeFromCart(item: any){
    this.cartService.removeFromCart(item);
  }

  calculateTotalPrice() {
    return this.cartService.calculateTotalPrice().toFixed(2);
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

}
