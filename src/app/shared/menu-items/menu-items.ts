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
        state: 'car',
        short_label: 'C',
        name: 'Liste des voitures',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
    ]
  },
];

const MECHANICITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'reception',
        short_label: 'R',
        name: 'Réceptionner une voiture',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'received-cars',
        short_label: 'RC',
        name: 'Liste des voitures',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'requested-cars',
        short_label: 'RQC',
        name: 'Demandes de ticket de sortie',
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
  getAdmin(): Menu[] {
    return MENUITEMS;
  }

  getMechanic(): Menu[] {
    return MECHANICITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
