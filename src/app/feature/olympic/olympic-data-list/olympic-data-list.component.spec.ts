import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympicDataListComponent } from './olympic-data-list.component';

describe('OlympicDataListComponent', () => {
  let component: OlympicDataListComponent;
  let fixture: ComponentFixture<OlympicDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlympicDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlympicDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
