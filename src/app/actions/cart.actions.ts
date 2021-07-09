import { createAction, props } from '@ngrx/store';
import { CartProduct } from '../interfaces/CartProduct';
import { Product } from '../interfaces/Product';

export const ADD_PRODUCT = createAction(
  '[PRODUCT] ADD_PRODUCT',
  props<Product>()
);
export const REMOVE_PRODUCT = createAction('[PRODUCT] REMOVE_PRODUCT');
export const INCREASE_COUNT = createAction(
  '[PRODUCT] INCREASE_COUNT',
  props<CartProduct>()
);
export const DECREASE_COUNT = createAction(
  '[PRODUCT] DECREASE_COUNT',
  props<CartProduct>()
);
export const CLEAR_CART = createAction('[PRODUCT] CLEAR_CART');
