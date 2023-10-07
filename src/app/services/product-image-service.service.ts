// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductImageServiceService {
//   private productImageSubject = new BehaviorSubject<string | null>(null);
//   productImage$ = this.productImageSubject.asObservable();

//   private productTitleSubject = new BehaviorSubject<string | null>(null);
//   productTitle$ = this.productTitleSubject.asObservable();

//   setProductImageAndTitle(imageUrl: string, title: string) {
//     this.productImageSubject.next(imageUrl);
//     this.productTitleSubject.next(title);
//   }

//   clearProductImageAndTitle() {
//     this.productImageSubject.next(null);
//     this.productTitleSubject.next(null);
//   }
// }

// product-image.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductImageServiceService {
  private productImageUrlSubject = new BehaviorSubject<string | null>(null);
  private productTitleSubject = new BehaviorSubject<string | null>(null);

  productImageUrl$ = this.productImageUrlSubject.asObservable();
  productTitle$ = this.productTitleSubject.asObservable();

  setProductImageAndTitle(imageUrl: string, title: string) {
    this.productImageUrlSubject.next(imageUrl);
    this.productTitleSubject.next(title);
  }
}
