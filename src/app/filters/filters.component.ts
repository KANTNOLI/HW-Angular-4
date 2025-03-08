import { Component } from '@angular/core';
import { Cart } from '../../assets/Interfaces/Carts.interface';
import { Carts } from '../carts/carts.component';

@Component({
  selector: 'app-filters',
  standalone: false,
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  search: string = ""
  historyClick: number = -1;

  setSort(id: number) {
    if (id === this.historyClick) {
      Carts.filter.reverse()
    } else {
      switch (id) {
        case 1:
          Carts.filter.sort((a, b) => a.price - b.price);
          break;
        default: Carts.filter.sort()
      }
    }


    this.historyClick = id

  }

  setCarts() {
    Carts.setFilter(Carts.original.filter((cart) => cart.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())))
  }

}


console.log(Carts);
