import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/lib/data';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  @Input() data: Book | undefined;

  @Output() addToCart = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  onAddToCart(): void {
    // this.addToCart.emit(this.product);
  }
}
