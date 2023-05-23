import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private items: any[] = [];

  cartItems: any[] = [];
  

  addToCart(item: any) {
    this.cartItems.push(item);
  }


  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  getItems() {
    return this.cartItems;
  }


  calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  getItemCount(): number {
    return this.items.length;
  }


 

}
