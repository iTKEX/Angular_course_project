import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { removeFromCart } from '../state/cart/cart.actions';

@Component({
  selector: 'app-cart',
  standalone:false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart$: Observable<Product[]>;

  constructor(private store: Store<{ cart: Product[] }>) {
    this.cart$ = this.store.select('cart');
  }

  ngOnInit(): void {}

  removeItem(productId: number) {
    this.store.dispatch(removeFromCart({ productId }));
  }

  getTotalPrice(cart: Product[] | null): number {
    if (!cart) return 0;
    return cart.reduce((total, item) => total + item.price, 0);
  }
}
