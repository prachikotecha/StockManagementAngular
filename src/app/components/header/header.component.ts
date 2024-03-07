import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ProductComponent]
})
export class HeaderComponent {

}
