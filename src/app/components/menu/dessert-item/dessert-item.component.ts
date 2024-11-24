import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../models/menu-item.model';

@Component({
  selector: 'app-dessert-item',
  standalone: true,
  imports: [],
  templateUrl: './dessert-item.component.html',
  styleUrl: './dessert-item.component.scss',
})
export class DessertItemComponent {
  @Input() dessertItem!: MenuItem;
}
