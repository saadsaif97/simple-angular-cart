import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartProduct } from 'src/app/interfaces/CartProduct';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  cart$: Observable<CartProduct[]>;
  cartProducts: CartProduct[] = [];

  constructor(private store: Store<{ store: CartProduct[] }>) {
    this.cart$ = this.store.select('store');
  }

  ngOnInit(): void {
    this.cart$.subscribe((cartProducts) => {
      this.cartProducts = cartProducts;
    });
  }
}
