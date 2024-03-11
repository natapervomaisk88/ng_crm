import { Component } from '@angular/core';
import { Article, data } from '../../../model/articles.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  articles: Array<Article> = data;
  status: string = 'Active';
}
