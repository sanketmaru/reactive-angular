import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { map, catchError } from 'rxjs/operators;
import { API, CovidSummary, CountryInfo } from '../constants';

@Injectable({
    providedIn: 'root'
})
export class CovidApiService {

    constructor(private http: HttpClient) { }

    getCovidSummary(): Observable<CovidSummary> {
        const summaryUrl = `${API.baseUrl}/summary`;
        return this.http.get<CovidSummary>(summaryUrl);
    }

    getCountries(): Observable<CountryInfo[]> {
        const countryUrl = `${API.baseUrl}/countries`;
        return this.http.get<CountryInfo[]>(countryUrl);
    }

    getCountryTotalByStatus(country: string): Observable<any> {
        const url = `${API.baseUrl}/live/country/${country}/status/confirmed`;
        return this.http.get<any[]>(url);
    }

}