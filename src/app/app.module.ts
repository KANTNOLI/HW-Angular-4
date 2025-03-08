import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { CartsComponent } from './carts/carts.component';
import { RenderCartPipe } from './pipes/render-cart.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    CartsComponent,
    RenderCartPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
