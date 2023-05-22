import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  clearCart() {
    throw new Error('Method not implemented.');
  }

  cartItems: any[] = [];
  cartService: any;

  addItem(item: any) {
    this.cartItems.push(item);
  }

  getItems() {
    return this.cartItems;
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }
  
  calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

 
}
