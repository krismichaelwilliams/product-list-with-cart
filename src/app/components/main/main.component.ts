import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuComponent, CartComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
