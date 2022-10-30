import { MenuCategory } from "./menu-category";

export interface MenuItem {
    name: string;
    category: MenuCategory;
    price: number;
    discounted?: boolean;
    discountPrice?: number;
}
