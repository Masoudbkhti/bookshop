export interface Book {
  title: string;
  price: number;
  image: string;
  id: number;
}

export interface ProductList {
  list_name: string;
  books: Book[];
}

export type Product = ProductList[];

export const NEWBOOKS: string = 'تازه‌ها';
export const LASTBOOKS: string = 'جدیدترین‌ها';
export const MOSTSELLER: string = 'پرفروش‌ترین‌ها';

export const CATEGIRIES: string[] = [NEWBOOKS, LASTBOOKS, MOSTSELLER];

export const PRODUCTS: Product = [
  {
    list_name: NEWBOOKS,
    books: [
      {
        id: 1,
        title: 'خاطرات سفیر',
        price: 20000,
        image: 'assets/images/newbooks/61960.jpg',
      },
      {
        id: 2,
        title: 'من او',
        price: 25000,
        image: 'assets/images/newbooks/13354.jpg',
      },
      {
        id: 3,
        title: 'نامیرا',
        price: 13000,
        image: 'assets/images/newbooks/7378.jpg',
      },
      {
        id: 4,
        title: 'نخل و نارنج',
        price: 56000,
        image: 'assets/images/newbooks/87960.jpg',
      },
      {
        id: 5,
        title: 'چشم هایش',
        price: 1000,
        image: 'assets/images/newbooks/3128.jpg',
      },
      {
        id: 6,
        title: 'مدیر مدرسه',
        price: 54000,
        image: 'assets/images/newbooks/57366.jpg',
      },
      {
        id: 7,
        title: 'زایو',
        price: 60000,
        image: 'assets/images/newbooks/58311.jpg',
      },
      {
        id: 8,
        title: 'انسان در جستجوی معنا',
        price: 12300,
        image: 'assets/images/newbooks/42250.jpg',
      },
    ],
  },
  {
    list_name: MOSTSELLER,
    books: [
      {
        id: 9,
        title: 'قیدار',
        price: 4000,
        image: 'assets/images/mostseller/21876.jpg',
      },
      {
        id: 10,
        title: 'ارتداد',
        price: 23400,
        image: 'assets/images/mostseller/99485.jpg',
      },
      {
        id: 11,
        title: 'کمی دیرتر',
        price: 234000,
        image: 'assets/images/mostseller/15603.jpg',
      },
      {
        id: 12,
        title: 'بیوتن',
        price: 9000,
        image: 'assets/images/mostseller/844.jpg',
      },
      {
        id: 13,
        title: 'ازبه',
        price: 760000,
        image: 'assets/images/mostseller/5481.jpg',
      },
      {
        id: 14,
        title: 'ابن مشغله',
        price: 9000,
        image: 'assets/images/mostseller/3317.jpg',
      },
      {
        id: 15,
        title: 'تن تن و سندباد',
        price: 710000,
        image: 'assets/images/mostseller/11104.jpg',
      },
      {
        id: 16,
        title: 'بار هستی',
        price: 4500,
        image: 'assets/images/mostseller/16059.jpg',
      },
    ],
  },
  {
    list_name: LASTBOOKS,
    books: [
      {
        id: 17,
        title: 'ضد',
        price: 21000,
        image: 'assets/images/lastbooks/24593.jpg',
      },
      {
        id: 18,
        title: 'رهش',
        price: 65000,
        image: 'assets/images/lastbooks/73765.jpg',
      },
      {
        id: 19,
        title: 'سال بلوا',
        price: 8000,
        image: 'assets/images/lastbooks/36971.jpg',
      },
      {
        id: 20,
        title: 'خال سیاه عربی',
        price: 16000,
        image: 'assets/images/lastbooks/102101.jpg',
      },
      {
        id: 21,
        title: 'آن سوی مرگ',
        price: 88000,
        image: 'assets/images/lastbooks/145410.jpg',
      },
      {
        id: 22,
        title: 'گردان قاطرچی ها',
        price: 110000,
        image: 'assets/images/lastbooks/54322.jpg',
      },
      {
        id: 23,
        title: 'آن ها',
        price: 81000,
        image: 'assets/images/lastbooks/5482.jpg',
      },
      {
        id: 24,
        title: 'ماه به روایت آه',
        price: 50000,
        image: 'assets/images/lastbooks/31598.jpg',
      },
    ],
  },
];

export const DATABASE: { categories: string[]; products: Product } = {
  categories: CATEGIRIES,
  products: PRODUCTS,
};
