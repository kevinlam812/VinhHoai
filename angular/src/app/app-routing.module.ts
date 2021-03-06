import { ApplicationLayoutComponent } from '@abp/ng.theme.basic';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './shared/layout/application-layout/app-layout.component';
import {AuthGuard} from'@abp/ng.core';

const routes1: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'shop',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('./payment/cart.module').then(m => m.CartModule)
      },
    ]
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account')
      .then(m => m.AccountModule.forLazy({ redirectUrl: '/login' })),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes1)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
