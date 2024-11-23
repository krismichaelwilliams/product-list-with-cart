import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu/menu.service';
import { DessertItemComponent } from './dessert-item/dessert-item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DessertItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  dessertItems: MenuItem[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getDesserts().subscribe((response) => {
      this.dessertItems = response;
      console.log(this.dessertItems);
    });
  }
}
