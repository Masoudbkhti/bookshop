import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart } from './models/cart.model';

@Component({
  selector: 'app-root',
  template: ` <app-header [cart]="cart"></app-header>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };
  public fontFamily: object = {
    default: 'Vazirmatn',
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
