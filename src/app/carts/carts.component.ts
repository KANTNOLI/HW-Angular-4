import { Input, Component } from '@angular/core';
import { Cart } from '../../assets/Interfaces/Carts.interface';
import { RenderCarts } from '../../assets/RenderArrayCarts.module';

@Component({
  selector: 'app-carts',
  standalone: false,
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  @Input() carts: Cart[] = []
  @Input() filterCarts: Cart[] = []
}
