import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';

const routes: Routes = [
  { path: 'catalog', component: ShoppingCartComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ShoppingCartComponent,
    CartItemComponent,
    ProductPageComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
