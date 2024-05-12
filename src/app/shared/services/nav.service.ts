import { Injectable } from '@angular/core';

export interface Menu {
  headTitle1? : string;
  headTitle2? : string;
  path? : string;
  title? : string ;
  type? : string;
  icon?: string;
  active?: boolean;
  bookmark? : boolean;
  items? : Menu[]
  children? : Menu[];
  level?: number;
  badge?: boolean,
  badgeText? : string;
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  MENUITEM: Menu[] = [
    {
      title: 'Dashboard',
      icon: 'airplay',
      type: 'link',
      active: true,
      level: 1,
      path: '/dashboard'
    },
    {
      title: 'My properties',
      icon: 'grid',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/property/add-property', title: 'Add Property', type: 'link',level: 2, icon: 'chevrons-right' },
        { path: '/property/edit-property', title: 'Edit Property', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/property/property-list', title: 'Property List', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/property/favourites', title: 'Favourites', type: 'link',level: 2 , icon: 'chevrons-right'},
      ],
    },
    {
      title: 'Manage users',
      icon: 'users',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/manage-user/user-profile', title: 'Profile', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/manage-user/add-user', title: 'Add user', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/manage-user/add-user-wizard', title: 'Add user wizard', type: 'link',level: 2 , icon: 'chevrons-right', badge: true, badgeText: 'New'},
        { path: '/manage-user/edit-user', title: 'Edit user', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/manage-user/all-user', title: 'All users', type: 'link',level: 2 , icon: 'chevrons-right'},
      ],
    },
    {
      title: 'Agents',
      icon: 'user-plus',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/agents/agent-profile', title: 'Profile', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/agents/add-agent', title: 'Add agent', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/agents/add-agent-wizard', title: 'Add agent wizard', type: 'link',level: 2 , icon: 'chevrons-right', badge: true, badgeText: 'New'},
        { path: '/agents/edit-agent', title: 'Edit agent', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/agents/all-agent', title: 'All agents', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/agents/invoice', title: 'Invoice', type: 'link',level: 2 , icon: 'chevrons-right'},
      ],
    },
    {
      title: 'Map',
      icon: 'map-pin',
      type: 'link',
      active: false,
      level: 1,
      path: '/map'
    },
    {
      title: 'Types',
      icon: 'layout',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/type/family-house', title: 'Family House', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/type/cottage', title: 'Cottage', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/type/apartment', title: 'Apartment', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/type/condominium', title: 'Condominium', type: 'link',level: 2 , icon: 'chevrons-right'}
      ],
    },
    {
      title: 'Reports',
      icon: 'bar-chart-2',
      type: 'link',
      active: false,
      level: 1,
      path: '/reports'
    },
    {
      title: 'Payments',
      icon: 'credit-card',
      type: 'link',
      active: false,
      level: 1,
      path: '/payments'
    },
    {
      title: 'Authentication',
      icon: 'unlock',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/authentication/log-in', title: 'Log in', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/authentication/sign-up', title: 'sign up', type: 'link',level: 2 , icon: 'chevrons-right'},
        { path: '/authentication/404', title: '404', type: 'link',level: 2 , icon: 'chevrons-right'},
      ],
    },
  ]
}
