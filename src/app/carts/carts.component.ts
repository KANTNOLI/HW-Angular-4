import { Component } from '@angular/core';
import { Cart } from '../../assets/Interfaces/Carts.interface';
import { RenderCarts } from '../../assets/RenderArrayCarts.module';

class CartRender {
  public original: Cart[] = RenderCarts(6);
  public filter: Cart[] = this.original;

  setFilter(value: Cart[]) {
    this.filter = value
  }
}


export let Carts = new CartRender

@Component({
  selector: 'app-carts',
  standalone: false,
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  carts: Cart[] = Carts.filter

  update() {
    this.carts = Carts.filter
  }
}


console.log(Carts);

