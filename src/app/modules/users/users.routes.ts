import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' }
];

export const usersRoute = RouterModule.forChild(routes);
