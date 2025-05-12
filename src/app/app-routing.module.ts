import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ProductsScreenComponent } from './screens/products-screen/products-screen.component';
import { ProductsDetailsScreenComponent } from './screens/products-details-screen/products-details-screen.component';
import { AboutScreenComponent } from './screens/about-screen/about-screen.component';
import { CartScreenComponent } from './screens/cart-screen/cart-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent,pathMatch: 'full'},
  { path: 'products', component: ProductsScreenComponent,pathMatch: 'full'},
  { path: 'product/:id', component: ProductsDetailsScreenComponent,pathMatch: 'full'},
  { path: 'cart', component: CartScreenComponent,pathMatch: 'full'},
  { path: 'about', component: AboutScreenComponent,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
