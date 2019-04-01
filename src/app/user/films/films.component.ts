import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// import { CityService } from './city.service';
import { CITIES } from './list-city';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  cityControl = new FormControl('', [Validators.required]);
  cinemaControl = new FormControl('', [Validators.required]);

  countryList: Array<any> = CITIES;

  cities: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }
}

