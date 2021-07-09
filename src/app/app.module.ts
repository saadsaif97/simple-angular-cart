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
import { ListItemComponent } from './components/list-item/list-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './reducers/cart.reducer';

const routes: Routes = [
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
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
    ListItemComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule.forRoot({
      store: cartReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
