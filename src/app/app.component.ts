import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ArticleComponent, TableComponent],
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
  username: string = 'Guest';
  image_banana = 'assets/images/banana.jpg';
  showInfo(): void {
    alert('Clicked');
  }
  changeData(): void {
    this.username = 'Default';
  }
}
