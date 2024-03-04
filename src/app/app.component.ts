import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { TableComponent } from './components/table/table.component';
import { CommonModule } from '@angular/common';
import { TitlePipe } from './pipes/title.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ArticleComponent,
    TableComponent,
    CommonModule,
    TitlePipe,
  ],

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
  pipes_test: Array<any> = [this.title, new Date(), 17, 3.1415926535, 0.77];
  showInfo(): void {
    alert('Clicked');
  }
  changeData(): void {
    this.username = 'Default';
  }
}
