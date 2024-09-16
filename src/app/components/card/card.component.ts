import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardImage:string = '';
  @Input() cardTitle:string = '';
  @Input() cardText:string = '';
  @Input() Id:string = '0';
}
