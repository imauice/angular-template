export const menus: Menu[] = [
  {
    id: 1, name: 'Inicio', route: '/'
  },
  {
    id: 2, name: 'Componentes',
    submenus: [
      {id: 1, name: 'Botones y enlaces', icon: 'home_icon', route: ''},
      {id: 2, name: 'Sliders', icon: 'home_icon', route: ''},
      {id: 3, name: 'Tarjetas', icon: 'home_icon', route: ''},
      {id: 4, name: 'Tabs y switches', icon: 'home_icon', route: ''}
    ]
  },
  {id: 5, name: 'Formularios', route: ''},
  {id: 6, name: 'Tablas', route: ''}
];

export interface Menu {
  id: number;
  name: string;
  route?: string;
  submenus?: Submenu[];
}

export interface Submenu {
  id: number;
  route: string;
  name: string;
  icon: string;
}
