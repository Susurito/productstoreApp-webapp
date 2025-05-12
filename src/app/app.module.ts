import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ProductsScreenComponent } from './screens/products-screen/products-screen.component';
import { ProductsDetailsScreenComponent } from './screens/products-details-screen/products-details-screen.component';
import { CartScreenComponent } from './screens/cart-screen/cart-screen.component';
import { AboutScreenComponent } from './screens/about-screen/about-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    ProductsScreenComponent,
    ProductsDetailsScreenComponent,
    CartScreenComponent,
    AboutScreenComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
