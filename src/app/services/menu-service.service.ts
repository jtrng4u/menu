import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { MenuCategory } from '../models/menu-category';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  menuItems: MenuItem[] = [
    {
      name: 'Chicken Fingers',
      category: MenuCategory.dinner,
      price: 11.99
    },
    {
      name: 'Pizza',
      category:  MenuCategory.dinner,
      price: 11.99
    },
    {
      name: 'Wings',
      category: MenuCategory.sides,
      price: 8.99
    },
    {
      name: 'Breadsticks',
      category: MenuCategory.sides,
      price: 4.99
    },
    {
      name: 'Ceassar Salad',
      category: MenuCategory.salads,
      price: 5.99
    },
    {
      name: 'Cinnamon Roll',
      category: MenuCategory.dessert,
      price: 8.99
    }
  ]

  getMenu(): MenuItem[] {
    return this.menuItems;
  }

  addMenuItem(menuItem: MenuItem): void {
    this.menuItems.push(menuItem);
  }

  removeMenuItem(menuItem: MenuItem): void {
    this.menuItems.push(menuItem);
  }

  updateMenuItem(menuItem: MenuItem): void {
    this.menuItems.push(menuItem);
  }

  // getMenuItem(menuItemName: String): MenuItem {
  //   return this.menuItems.find(m => m.name == menuItemName);
  // }


  constructor() { }
}
