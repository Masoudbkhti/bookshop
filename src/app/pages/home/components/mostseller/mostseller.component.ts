import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/lib/data';

@Component({
  selector: 'app-mostseller',
  templateUrl: './mostseller.component.html',
})
export class MostsellerComponent implements OnInit {
  @Input() data: Book | undefined;

  @Output() addToCart = new EventEmitter();

  constructor() {}
  ngOnInit(): void {
    console.log(this.data, 'book');
  }

  onAddToCart(): void {
    // this.addToCart.emit(this.product);
  }
}
