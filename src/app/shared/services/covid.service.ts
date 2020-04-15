import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { map, catchError } from 'rxjs/operators;
import { API, CovidSummary } from '../constants';

@Injectable({
    providedIn: 'root'
})
export class CovidApiService {

    constructor(private http: HttpClient) { }

    getCovidSummary(): Observable<CovidSummary> {
        const summaryUrl = `${API.baseUrl}/summary`;
        return this.http.get<CovidSummary>(summaryUrl);
    }

}