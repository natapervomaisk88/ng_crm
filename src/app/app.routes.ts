import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ListOfArticlesComponent } from './components/list-of-articles/list-of-articles.component';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contacts',
    component: ContactComponent,
  },
  {
    path: 'articles',
    component: ListOfArticlesComponent,
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
];
