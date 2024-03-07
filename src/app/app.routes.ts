import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'header',component:HeaderComponent},
    {path:'product',component:ProductComponent},
    {path:'cart',component:CartComponent},
    {path:'login',component:LoginComponent}

];
