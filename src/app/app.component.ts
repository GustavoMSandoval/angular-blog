import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { MainDescriptionComponent } from "./components/main-description/main-description.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, MainDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
  
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}
