import { Component } from '@angular/core';
import { MainButtonComponent } from "../main-button/main-button.component";
import { MainLinksComponent } from "../main-links/main-links.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MainButtonComponent, MainLinksComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
