import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  public title: string = 'ng_crm';
  constructor() {}
}
