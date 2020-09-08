export const menus: Menu[] = [
  {
    id: 1, name: 'Inicio', icon: 'home', route: '/'
  },
  {
    id: 2, name: 'Componentes',
    submenus: [
      {id: 1, name: 'Botones', icon: 'add_circle', route: ''},
      {id: 2, name: 'Tarjetas', icon: 'collections', route: ''},
      {id: 3, name: 'Sliders', icon: 'linear_scale', route: ''},
      {id: 4, name: 'Switches y tabs', icon: 'toggle_on', route: ''}
    ]
  },
  {
    id: 5, name: 'Formularios', icon: 'edit'
  },
  {
    id: 6, name: 'Charts', icon: 'analytics'
  }
];

export interface Menu {
  id: number;
  name: string;
  icon?: string;
  route?: string;
  submenus?: Submenu[];
}

export interface Submenu {
  id: number;
  route: string;
  name: string;
  icon?: string;
}
