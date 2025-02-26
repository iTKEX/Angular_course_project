import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../state/counter/counter.actions';
import { addToCart } from '../state/cart/cart.actions';
import { Product } from '../models/product.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  id: any;
  data!: Product;
  count$!: Observable<number>;
  private store = inject(Store<{ counter: number; cart: Product[] }>);

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
      });
  }

  goBack() {
    window.history.back();
  }

  addToCart() {
    this.store.dispatch(addToCart({ product: this.data }));
    this.store.dispatch(increment());
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
}
