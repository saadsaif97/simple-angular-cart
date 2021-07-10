import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CLEAR_CART } from 'src/app/actions/cart.actions';
import { CartProduct } from 'src/app/interfaces/CartProduct';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<CartProduct[]>;
  cartProducts: CartProduct[] | [] = [];

  constructor(private store: Store<{ store: CartProduct[] }>) {
    this.cart$ = this.store.select('store');
  }

  ngOnInit(): void {
    this.cart$.subscribe((cartProducts) => (this.cartProducts = cartProducts));
  }

  checkout(): void {
    Swal.fire({
      title: 'Checkout Successful!',
      text: `Your Payed $${this.totalAmount()} for this dummy checkout!`,
      icon: 'success',
    });

    this.store.dispatch(CLEAR_CART());
  }

  totalAmount(): string {
    let total = 0;
    this.cartProducts.forEach((product) => {
      let count = product.count ? product.count : 1;
      total += count * product.price;
    });

    return total.toFixed(2);
  }
}
