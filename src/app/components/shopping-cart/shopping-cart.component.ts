import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  loading: Boolean = false;
  products: Product[] | any;

  constructor(private service: ProductsService) {
    this.products = [];
  }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    this.products = await this.service.getProducts();
    this.loading = false;
  }
}
