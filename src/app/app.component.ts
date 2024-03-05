import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { TableComponent } from './components/table/table.component';
import { CommonModule } from '@angular/common';
import { TitlePipe } from './pipes/title.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedDataService } from './services/shared-data.service';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ArticleComponent,
    TableComponent,
    NavbarComponent,
    HeaderComponent,
    CommonModule,
    TitlePipe,
  ],
  providers: [SharedDataService],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private sharedData: SharedDataService) {}
}
