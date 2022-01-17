import { Routes, RouterModule } from '@angular/router';
import { PagesPage } from './pages.page';


const routes: Routes = [
  {
    path: '', component: PagesPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('@modules/menus/menus.module').then( m => m.MenusModule)
      },
      { path: '', redirectTo: '/pages/home', pathMatch: 'full' }
    ]
  },

  { path: '', redirectTo: '/pages/home', pathMatch: 'full' }
];

export const pageRoute = RouterModule.forChild(routes);
