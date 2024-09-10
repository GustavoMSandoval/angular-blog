import { Component } from '@angular/core';
import { MainButtonComponent } from "../main-button/main-button.component";

@Component({
  selector: 'app-main-description',
  standalone: true,
  imports: [MainButtonComponent],
  templateUrl: './main-description.component.html',
  styleUrl: './main-description.component.scss'
})
export class MainDescriptionComponent {

}
