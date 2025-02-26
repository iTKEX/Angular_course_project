import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { removeFromCart } from '../state/cart/cart.actions';
import { decrement } from '../state/counter/counter.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<Product[]>;
  promoCode: string = '';
  discount: number = 0;
  promoMessage: string = '';
  isInvalidPromo: boolean = false;

  private promoCodes: { [key: string]: number } = {
    winter: 0.25,
    first: 0.4,
  };

  constructor(
    private store: Store<{ cart: Product[] }>,
  ) {
    this.cart$ = this.store.select('cart');
  }

  ngOnInit(): void {}

  removeItem(productId: number) {
    this.store.dispatch(removeFromCart({ productId }));
    this.store.dispatch(decrement());
  }

  applyPromoCode() {
    const code = this.promoCode.trim().toLowerCase();

    if (this.promoCodes[code]) {
      this.discount = this.promoCodes[code];
      this.promoMessage = `Promo Code Applied! You got ${
        this.discount * 100
      }% off.`;
      this.isInvalidPromo = false;
    } else {
      this.promoMessage = 'Invalid Promo Code';
      this.isInvalidPromo = true;
      this.discount = 0;
    }
  }

  getTotalPrice(cart: Product[] | null): string {
    if (!cart) return '0.00 SR';
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const discountedTotal = total - total * this.discount;
    return discountedTotal.toFixed(2) + ' SR';
  }

  checkout() {
    this.cart$.subscribe((cart) => {
      const orderDetails = {
        items: cart,
        totalPrice: this.getTotalPrice(cart),
        date: new Date().toLocaleString(),
        promoCode: this.promoCode || 'None',
        discount: this.discount,
      };

      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    });
  }
}
