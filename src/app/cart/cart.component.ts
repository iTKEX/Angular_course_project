import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { removeFromCart } from '../state/cart/cart.actions';
import { decrement } from '../state/counter/counter.actions';

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
    this.store.dispatch(decrement());
  }

  getTotalPrice(cart: Product[] | null): string {
    if (!cart) return '0.00 SR';
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return total.toFixed(2) + ' SR';
  }
}
