import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Book, LASTBOOKS, ProductList } from 'src/lib/data';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent implements OnInit {
  @Input() data: Book | undefined;

  @Output() addToCart = new EventEmitter();

  product = {};
  constructor() {}
  ngOnInit(): void {
    this.product = {
      image: this.data?.image,
      name: this.data?.title,
      price: this.data?.price,
      quantity: 1,
      id: this.data?.id,
      category: LASTBOOKS,
    };
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
