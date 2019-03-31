import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { City } from './city';
import { CITIES } from './list-city';
import {  CityService } from './city.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  cities: City[];

  cinemas: City['cinemas'];

  selectedCity: City;
  selectedCinema: City["cinemas"];
  payLoad = '';

  cityControl = new FormControl('', [Validators.required]);
  cinemaControl = new FormControl('', [Validators.required]);

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
  }

  onSelect(city: City): void {
    this.selectedCity = city;
  }

  getCities(): void {
    this.cityService.getCity()
      .subscribe(cities => this.cities = cities);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.selectedCity);
  }
}

