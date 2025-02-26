import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../state/cart/cart.actions';
import { Product } from '../../models/product.model';

const initialState: Product[] = JSON.parse(sessionStorage.getItem('cart') || '[]');

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    const updatedCart = [...state, product];
    sessionStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to sessionStorage
    return updatedCart;
  }),
  on(removeFromCart, (state, { productId }) => {
    const updatedCart = state.filter(item => item.id !== productId);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to sessionStorage
    return updatedCart;
  })
);
