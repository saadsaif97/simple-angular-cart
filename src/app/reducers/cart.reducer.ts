import { CartProduct } from '../interfaces/CartProduct';
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from '../actions/cart.actions';
import { createReducer, on } from '@ngrx/store';

const initialState: CartProduct[] = [];

export const cartReducer = createReducer(
  initialState,
  on(ADD_PRODUCT, (state, product) => {
    const productFound = state.find((prod) => prod.id === product.id);

    if (!productFound) {
      return [{ ...product, count: 1 }, ...state];
    } else {
      // updating the previous product count
      // returning updated and other than updated products as state

      let updatedProduct = Object.assign({}, productFound);
      updatedProduct.count ? updatedProduct.count++ : updatedProduct.count;

      return [
        updatedProduct,
        ...state.filter((prod) => prod.id !== updatedProduct.id),
      ];
    }
  }),
  on(REMOVE_PRODUCT, (state, id) => {
    return state.filter((product) => product.id !== id);
  }),
  on(CLEAR_CART, (state) => {
    state = [];
    return state;
  }),
  on(INCREASE_COUNT, (state, product) => {
    let updatedProduct = Object.assign({}, product);
    updatedProduct.count ? updatedProduct.count++ : updatedProduct.count;

    return [
      updatedProduct,
      ...state.filter((prod) => prod.id !== updatedProduct.id),
    ];
  }),
  on(DECREASE_COUNT, (state, product) => {
    if (product.count && product.count === 1) {
      return state.filter((prod) => prod.id !== product.id);
    }

    let updatedProduct = Object.assign({}, product);
    updatedProduct.count ? updatedProduct.count-- : updatedProduct.count;

    return [
      ...state.filter((prod) => prod.id !== updatedProduct.id),
      updatedProduct,
    ];
  })
);
