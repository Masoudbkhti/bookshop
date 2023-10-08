import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Book, LASTBOOKS } from "src/lib/data";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
})
export class NewsComponent implements OnInit {
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
