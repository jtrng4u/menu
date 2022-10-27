import { Component } from '@angular/core';
import { MenuCategory } from './models/menu-category';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Chripus Pizza!';
  pizzaMenu: MenuItem[] = [
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

  getCategory(idx: number): string {
    return MenuCategory[idx]
  }
}
