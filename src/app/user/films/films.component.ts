import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { City } from './city';
import { CITIES } from './list-city';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  cities = CITIES;

  selectedCity: string;
  selectedCinema: Array<string>;

  cityControl = new FormControl('', [Validators.required]);
  cinemaControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

}
