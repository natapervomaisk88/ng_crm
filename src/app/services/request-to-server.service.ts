import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestToServerService {
  private API_URL: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}
  getArticles(): Observable<any> {
    const url = `${this.API_URL}/articles`;
    return this.httpClient.get(url);
  }
  getArticleById(id: number): Observable<any> {
    console.log(id);
    const url = `${this.API_URL}/articles/${id}`;
    return this.httpClient.get(url);
  }
}
