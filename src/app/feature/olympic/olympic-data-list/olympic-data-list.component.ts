import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OlympicDataService } from 'src/app/core/services/olympic-data.service';
import { OlympicData } from 'src/app/models/olympic-data.model';

@Component({
  selector: 'app-olympic-data-list',
  templateUrl: './olympic-data-list.component.html',
  styleUrls: ['./olympic-data-list.component.scss'],
})
export class OlympicDataListComponent implements OnInit {
  olympicData$!: Observable<OlympicData[]>;

  constructor(public service: OlympicDataService) {}

  ngOnInit(): void {
    this.olympicData$ = this.service.getOlympicData$();
  }
}
