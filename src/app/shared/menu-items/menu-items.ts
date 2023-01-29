import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'simple-page',
        short_label: 'S',
        name: 'Simple Page',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: "car-deposit",
        short_label: 'CD',
        name: 'Dépot de voiture',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'car',
        short_label: 'C',
        name: 'Liste des voitures',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'administrator',
        short_label: 'A',
        name: 'Administrateurs',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
    ]
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
