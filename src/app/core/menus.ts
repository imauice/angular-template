export const menus: Menu[] = [
  {
    id: 1, name: 'Inicio', route: '/'
  },
  {
    id: 2, name: 'Opción 1',
    submenus: [
      {id: 1, name: 'Subopción 1', icon: 'analytics', route: ''},
      {id: 2, name: 'Subopción 2', icon: 'build', route: ''},
      {id: 3, name: 'Subopción 3', icon: 'description', route: ''},
      {id: 4, name: 'Subopción 4', icon: 'language', route: ''}
    ]
  },
  {
    id: 5, name: 'Opción 2', route: '',
    submenus: [
      {id: 5, name: 'Subopción 1', icon: 'payment', route: ''},
      {id: 6, name: 'Subopción 2', icon: 'location_on', route: ''},
      {id: 7, name: 'Subopción 3', icon: 'stay_current_portrait', route: ''},
      {id: 8, name: 'Subopción 4', icon: 'mail', route: ''}
    ]
  },
  {id: 6, name: 'Opción 3', route: ''}
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
