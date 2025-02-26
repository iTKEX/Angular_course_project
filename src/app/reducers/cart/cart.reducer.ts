import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../state/cart/cart.actions';
import { Product } from '../../models/product.model';

export const initialState: Product[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    return [...state, { ...product, price: Number(product.price) }];
  }),
  on(removeFromCart, (state, { productId }) => {
    return state.filter((item) => item.id !== productId);
  })
);
