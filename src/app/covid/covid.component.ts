import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidApiService } from '../shared/services/covid.service';
import { Observable } from 'rxjs';
import { CovidSummary, CountryInfo } from '../shared/constants';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  public covidSummaryObs: Observable<CovidSummary>;
  public covidCountriesObs: Observable<CountryInfo[]>;

  constructor(private covidService: CovidApiService, private router: Router) { }

  ngOnInit(): void {
    // this.covidSummaryObs = this.covidService.getCovidSummary();
    this.covidCountriesObs = this.covidService.getCountries();
  }

  getCountryData(country: CountryInfo) {
    this.router.navigateByUrl(`country/${country}`);
  }

}
