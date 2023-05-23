import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  private items: any[] = [];

  cartItems: any[] = [];

  constructor(private cartService: CartServiceService, private router: Router) {
    this.cartItems = cartService.getItems();
  }

  getTotalPrice(): number {
    // Calculate the total price of items in the cart
    const cartItems = this.cartService.getItems();
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  getItems() {
    return this.cartItems;
  }

  buyItems(): void {
    // Perform the checkout process here
    // You can place your logic for processing the payment or any other necessary steps
    // Once the purchase is successful, you can clear the cart and navigate to a success page
    this.router.navigate(['/checkout/success']);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

}
