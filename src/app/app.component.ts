import { Component } from '@angular/core';
import { MenuCategory } from './models/menu-category';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userAction: string = 'None';
  menuCategories = Object.values(MenuCategory);
  menuItem: MenuItem = {} as MenuItem;
  menuItems: MenuItem[] = [
    {
      name: 'Chicken Fingers',
      category: MenuCategory.dinner,
      price: 11.99
    },
    {
      name: 'Pizza',
      category: MenuCategory.dinner,
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

  message: string = "";

  getCategory(idx: number): string {
    return MenuCategory[idx]
  }

  deleteMenuItem(name: string): void {
    let index: number = this.menuItems.findIndex(item => item.name == name);
    this.menuItems.splice(index, 1);
  }

  addItem() {
    // let newMenuItem: MenuItem = {
    //   name: this.menuItem.name,
    //   category: this.menuItem.category,
    //   price: this.menuItem.price,
    // };

    let newMenuItem: MenuItem = {...this.menuItem};
    this.menuItems.push(newMenuItem);
  }

  setUserAction(userAction: string, name: string = 'none') {
    this.userAction = userAction;

    if (name != 'none') {

      let existingItem = this.menuItems.find(item => item.name == name);
      console.log('name is: ', existingItem);

      if (existingItem) {
        this.menuItem = existingItem;
      }
    }
  }

  updateItem() {
    let existingItem = this.menuItems.find(item => item.name = this.menuItem.name);

    if (existingItem) {
      existingItem.category = this.menuItem.category;
      existingItem.price = this.menuItem.price;
    }
    console.log('existingItem is: ', existingItem);
    this.setUserAction('none');
    this.message = 'Update Successfull!!'
  }
}
