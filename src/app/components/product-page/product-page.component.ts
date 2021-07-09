import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  id: string;
  product: Product | any;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.params.id;
  }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    this.product = await this.service.getProductById(this.id);
    this.loading = false;
  }
}
