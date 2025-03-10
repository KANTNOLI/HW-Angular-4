import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsComponent } from './carts/carts.component';

import { FiltersComponent } from './filters/filters.component';
import { RenderCartPipe } from './pipes/render-cart.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartsComponent,
    FiltersComponent,
    RenderCartPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
