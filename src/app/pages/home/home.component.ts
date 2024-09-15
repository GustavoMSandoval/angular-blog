import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { MainDescriptionComponent } from "../../components/main-description/main-description.component";
import { TextSectionComponent } from "../../components/text-section/text-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, MainDescriptionComponent, TextSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
