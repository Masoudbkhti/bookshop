import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import {
  Book,
  DATABASE,
  LASTBOOKS,
  MOSTSELLER,
  NEWBOOKS,
  PRODUCTS,
  ProductList,
} from 'src/lib/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private cartService: CartService) {}

  products: Product | undefined;
  categoryData = PRODUCTS.map((item) => item.list_name);
  dataNews = PRODUCTS.filter((item) => item.list_name === NEWBOOKS)
    .map((item) => item.books)
    .flat();
  dataMostseller = PRODUCTS.filter((item) => item.list_name === MOSTSELLER)
    .map((item) => item.books)
    .flat();
  dataLast = PRODUCTS.filter((item) => item.list_name === LASTBOOKS)
    .map((item) => item.books)
    .flat();

  ngOnInit(): void {
    console.log(this.dataLast);
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id,
      image: product.image,
      price: product.price,
      quantity: product.quantity,
      name: product.name,
      category: product.category,
    });
  }
}
