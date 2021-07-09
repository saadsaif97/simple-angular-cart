import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_PRODUCT } from 'src/app/actions/cart.actions';
import { CartProduct } from 'src/app/interfaces/CartProduct';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() product: any;

  constructor(private store: Store<{ store: CartProduct[] }>) {}

  ngOnInit(): void {}

  onClick(product: Product): void {
    this.store.dispatch(ADD_PRODUCT(product));
  }
}
