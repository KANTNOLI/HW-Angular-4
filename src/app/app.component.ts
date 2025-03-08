import { Component } from '@angular/core';
import { Cart } from '../assets/Interfaces/Carts.interface';
import { RenderCarts } from '../assets/RenderArrayCarts.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  carts: Cart[] = RenderCarts(6);
  filterCarts: Cart[] = this.carts;

  search: string = '';
  historyClick: number = -1;

  setSort(id: number) {
    if (id === this.historyClick) {
      this.filterCarts.reverse();
    } else {
      switch (id) {
        case 1:
          this.filterCarts.sort((a, b) => a.price - b.price);
          break;
        default:
          this.filterCarts.sort();
      }
    }

    this.historyClick = id;
  }

  setCarts(search: string) {
    console.log(11);

    this.filterCarts = this.carts.filter((cart) =>
      cart.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    console.log(this.filterCarts);
  }
}
