import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
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
