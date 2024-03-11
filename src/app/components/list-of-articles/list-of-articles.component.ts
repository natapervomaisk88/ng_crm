import { Component, OnInit } from '@angular/core';
import { RequestToServerService } from '../../services/request-to-server.service';
import { catchError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Article } from '../../../model/articles.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-of-articles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-of-articles.component.html',
  styleUrl: './list-of-articles.component.scss',
})
export class ListOfArticlesComponent implements OnInit {
  constructor(private httpService: RequestToServerService) {}
  articles: Array<Article> = [];
  ngOnInit(): void {
    this.httpService
      .getArticles()
      .pipe(
        catchError((error) => {
          console.error('Error:', error);
          throw error;
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.articles = response;
      });
  }
}
