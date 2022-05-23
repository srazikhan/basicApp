import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/layout/main/main.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  {
    path: "main", component: MainComponent, children: [
      { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard] ,data : {title:'Dashboard'}},
      { path: 'poc', loadChildren: () => import('./features/poc/poc.module').then(m => m.PocModule), canActivate:[AuthGuard],data : {title:'POC'}},
      { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),canActivate:[AuthGuard],data : {title:'Users'} },
      { path: 'product-list', loadChildren: () => import('./features/product-list/product-list.module').then(m => m.ProductListModule) ,data : {title:'Product'}},
    ]
  },
  
 
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
