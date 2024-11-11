import { Component } from '@angular/core';
import { DessertItemComponent } from './dessert-item/dessert-item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DessertItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
