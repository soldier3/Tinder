import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { City } from './city';
import { CITIES } from './list-city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  getCity(): Observable<City[]> {
    return of(CITIES);
  }

  constructor() { }

}
