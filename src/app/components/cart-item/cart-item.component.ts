import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartProduct } from 'src/app/interfaces/CartProduct';
import { DECREASE_COUNT, INCREASE_COUNT } from './../../actions/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() product: CartProduct | any;

  constructor(private store: Store<{ store: CartProduct[] }>) {}

  ngOnInit(): void {}

  increaseCount(product: CartProduct): void {
    this.store.dispatch(INCREASE_COUNT(product));
  }

  decreaseCount(product: CartProduct): void {
    this.store.dispatch(DECREASE_COUNT(product));
  }
}
