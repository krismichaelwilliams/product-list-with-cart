import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: CartItem[] = [
    {
      name: 'Classic Tiramisu',
      price: 5.5,
      quantity: 2,
    },
    {
      name: 'Vanilla Panna Cotta',
      price: 6.5,
      quantity: 4,
    },
  ];
}
