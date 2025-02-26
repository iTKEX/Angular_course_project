import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement } from '../state/counter/counter.actions';
import Swal from 'sweetalert2';
import { addToCart, removeFromCart } from '../state/cart/cart.actions';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  id: any;
  data: any;
  count$!: Observable<number>;
  private store = inject(Store<{ counter: number }>);

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.count$ = this.store.select('counter');
  }

  ngOnInit() {
    fetch(`https://fakestoreapi.com/products/${this.id}`)
      .then((response) => response.json())
      .then((result) => {
        result.price = (result.price * 3.75).toFixed(2);
        this.data = result;
        console.log(
          `Product: ${this.data.title}, Price in SR: ${this.data.price}`
        );
      });
  }

  goBack(): void {
    window.history.back();
  }

  increment() {
    this.store.dispatch(addToCart({ product: this.data }));
    Swal.fire({
      icon: 'success',
      title: 'Item added to cart successfully.',
      toast: true,
      position: 'top-start',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }

  decrement() {
    this.store.dispatch(removeFromCart({ productId: this.data.id }));
    Swal.fire({
      icon: 'success',
      title: 'Item removed from cart successfully.',
      toast: true,
      position: 'top-start',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }
}
