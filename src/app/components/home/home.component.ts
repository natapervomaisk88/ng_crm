import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { CommonModule } from '@angular/common';
import { TitlePipe } from '../../pipes/title.pipe';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from '../article/article.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TitlePipe,
    ArticleComponent,
    TableComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private sharedData: SharedDataService) {}
  content: Array<string> = [
    'Angular - це сучасний фреймворк для розробки веб-додатків',
    'Angular - це фреймворк от компании Google',
    'Через {{variable}} - можна робити інтерполяцію',
  ];
  version: string = 'v17';

  username: string = 'Guest';
  image_banana = 'assets/images/banana.jpg';
  pipes_test: Array<any> = [
    this.sharedData.title,
    new Date(),
    17,
    3.1415926535,
    0.77,
  ];
  showInfo(): void {
    alert('Clicked');
  }
  changeData(): void {
    this.username = 'Default';
  }
}
