import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// import { CityService } from './city.service';
import { CITIES } from './list-city';
import { Cities } from './city';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  cityControl = new FormControl('', [Validators.required]);
  cinemaControl = new FormControl('', [Validators.required]);

  countryList: Array<any> = CITIES;

  cinemas: Array<any>;

  selectedCity: Cities;
  selectedCinema: Cities["cinemas"];

  payLoad = '';

  constructor() { }

  ngOnInit() {
  }

  changeCountry(count) {
    this.cinemas = this.countryList.find(con => con.city == count).cinemas;
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.selectedCity);
  }
}

