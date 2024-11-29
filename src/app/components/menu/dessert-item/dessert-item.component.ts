import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../models/menu-item.model';

@Component({
  selector: 'app-dessert-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './dessert-item.component.html',
  styleUrl: './dessert-item.component.scss',
})
export class DessertItemComponent {
  @Input() dessertItem!: MenuItem;
  amountInCart: number = 0;

  addToCart() {
    this.amountInCart += 1;
  }

  removeFromCart() {
    this.amountInCart -= 1;
  }
}
