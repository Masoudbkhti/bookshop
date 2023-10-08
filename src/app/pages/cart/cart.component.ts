import { Component, OnInit, Inject } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductImageServiceService } from 'src/app/services/product-image-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [],
  };
  // productImageUrl$ = this.productImageService.productImage$;
  // productTitle$ = this.productImageService.productTitle$;
  productImageUrl: string | null = null;
  productTitle: string | null = null;
  constructor(
    private cartService: CartService,
    @Inject(ProductImageServiceService)
    private productImageService: ProductImageServiceService
  ) {}
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });

    // this.productImageUrl$.subscribe((imageUrl: string | null) => {
    //   if (imageUrl) {
    //     setTimeout(() => {
    //       this.productImageService.clearProductImageAndTitle();
    //     }, 3000);
    //   }
    // });

    // this.productTitle$.subscribe((title: string | null) => {
    //   if (title) {
    //     setTimeout(() => {
    //       this.productImageService.clearProductImageAndTitle();
    //     }, 5000);
    //   }
    // });
    this.productImageService.productImageUrl$.subscribe((imageUrl) => {
      this.productImageUrl = imageUrl;
    });

    this.productImageService.productTitle$.subscribe((title) => {
      this.productTitle = title;
    });
  }

  getTotalPrice(items: Array<CartItem>): number {
    return this.cartService.getTotalPrice(items);
  }
  getTotalQuantity(items: Array<CartItem>) {
    return this.cartService.getTotalQuantity(items);
  }
}
