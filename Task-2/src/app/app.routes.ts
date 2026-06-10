import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { ProductDetails } from './components/product-details/product-details';
import { Profile } from './components/profile/profile';
import { authGuard } from './guards/auth.guard';
import { Products } from './components/products/products';

//creating protected route for the project
export const routes: Routes = [
    { path: '', component: Login, pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
    { path: 'products/:id', component: ProductDetails, canActivate: [authGuard] },
    { path: 'profile', component: Profile, canActivate: [authGuard] },
    { path: 'products', component: Products, canActivate: [authGuard] }
    // { path: 'products', canActivate: [authGuard], loadComponent: () => import('./components/products/products').then((m) => m.Products) },
];
