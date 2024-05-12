import { Routes } from "@angular/router";

export const content : Routes = [
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard',
      breadcrumb: 'Dashboard'
    },
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'property',
    data: {
      title: 'My properties',
      breadcrumb: 'My properties'
    },
    loadChildren: () => import("../../components/property/property.module").then(m => m.PropertyModule)
  },
  {
    path: 'manage-user',
    data: {
      title: 'Manage users',
      breadcrumb: 'Manage users'
    },
    loadChildren: () => import("../../components/manage-user/manage-user.module").then(m => m.ManageUserModule)
  },
  {
    path: 'agents',
    data: {
      title: 'Agents',
      breadcrumb: 'Agents'
    },
    loadChildren: () => import('../../components/agents/agents.module').then(m => m.AgentsModule)
  },
  {
    path: 'map',
    data: {
      title: 'Map',
      breadcrumb: 'Map'
    },
    loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'type',
    data: {
      title: "Types",
      breadcrumb: 'Types',
    },
    loadChildren: () => import('../../components/property-types/property-types.module').then(m => m.PropertyTypesModule)
  },
  {

    path: 'reports',
    data: {
      title: "Reports",
      breadcrumb: 'Reports',
    },
    loadChildren: () => import('../../components/reports/reports.module').then(m => m.ReportsModule)
  },
  {

    path: 'payments',
    data: {
      title: "Payments",
      breadcrumb: 'Payments',
    },
    loadChildren: () => import('../../components/payments/payments.module').then(m => m.PaymentsModule)
  }
]
