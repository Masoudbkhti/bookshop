import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [],
  };

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }

  constructor(private cartService: CartService) {}

  getTotalPrice(items: Array<CartItem>): number {
    return this.cartService.getTotalPrice(items);
  }
  getTotalQuantity(items: Array<CartItem>) {
    return this.cartService.getTotalQuantity(items);
  }
}
