import { Component, OnInit } from '@angular/core';
import { RequestToServerService } from '../../services/request-to-server.service';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  articleId: number = 0;
  article: any;
  constructor(
    private route: ActivatedRoute,
    private httpService: RequestToServerService
  ) {}
  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService
      .getArticleById(this.articleId)
      .pipe(
        catchError((error) => {
          console.error('Error:', error);
          throw error;
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.article = response;
      });
  }
}
