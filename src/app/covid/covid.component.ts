import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../shared/services/covid.service';
import { Observable } from 'rxjs';
import { CovidSummary } from '../shared/constants';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  public covidSummaryObs: Observable<CovidSummary>;

  constructor(private covidService: CovidApiService) { }

  ngOnInit(): void {
    this.covidSummaryObs = this.covidService.getCovidSummary();
  }

}
