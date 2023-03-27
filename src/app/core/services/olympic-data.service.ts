import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OlympicData } from 'src/app/models/olympic-data.model';

@Injectable({
  providedIn: 'root',
})
export class OlympicDataService {
  constructor(public http: HttpClient) {}

  getOlympicData$(): Observable<OlympicData[]> {
    return this.http.get<OlympicData[]>(
      'https://www.ag-grid.com/example-assets/olympic-winners.json'
    );
  }
}
