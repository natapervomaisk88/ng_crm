import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private sharedData: SharedDataService) {}
  title: string = this.sharedData.title;
  image: string = 'assets/images/angular.png';
}
