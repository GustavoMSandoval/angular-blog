import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-links',
  standalone: true,
  imports: [],
  templateUrl: './main-links.component.html',
  styleUrl: './main-links.component.scss'
})
export class MainLinksComponent {
  @Input() linkText:string = '';
  @Input() link: string = '';
}
