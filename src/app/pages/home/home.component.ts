import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { MainDescriptionComponent } from "../../components/main-description/main-description.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, MainDescriptionComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
