import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicDataListComponent } from './olympic-data-list/olympic-data-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OlympicDataListComponent,
  },
];

@NgModule({
  declarations: [OlympicDataListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OlympicModule {}
