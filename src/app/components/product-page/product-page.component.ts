import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartProduct } from 'src/app/interfaces/CartProduct';
import { Product } from 'src/app/interfaces/Product';
import { ProductsService } from 'src/app/services/products.service';
import { ADD_PRODUCT } from 'src/app/actions/cart.actions';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  id: string;
  product: Product | any;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService,
    private store: Store<{ store: CartProduct[] }>
  ) {
    this.id = this.route.snapshot.params.id;
  }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    this.product = await this.service.getProductById(this.id);
    this.loading = false;
  }

  onClick(product: Product): void {
    this.store.dispatch(ADD_PRODUCT(product));
    Toast.fire({
      icon: 'success',
      title: 'Product added to cart',
    });
  }
}
