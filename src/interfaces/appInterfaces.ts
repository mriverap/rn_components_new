export interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

export interface FlatListItem {
  name: string;
  icon: string;
  component: string;
  state: 'In progress' | 'Completed' | 'Pending';
}
