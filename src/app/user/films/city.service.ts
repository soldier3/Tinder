import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cities } from './city';
import { CITIES } from './list-city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  getCity(): Observable<Cities[]> {
    return of(CITIES);
  }

  constructor() { }
}
