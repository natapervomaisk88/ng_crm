import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'ng_crm';
  content: Array<string> = [
    'Angular - це сучасний фреймворк для розробки веб-додатків',
    'Angular - це фреймворк от компании Google',
    'Через {{variable}} - можна робити інтерполяцію',
  ];
  version: string = 'v17';
  image: string = 'assets/images/angular.png';
}
