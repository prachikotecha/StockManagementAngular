import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterLink,RouterOutlet,LoginComponent,HeaderComponent,ProductComponent,CommonModule,CartComponent]
})
export class AppComponent {
  title = 'Divine Website';
}
