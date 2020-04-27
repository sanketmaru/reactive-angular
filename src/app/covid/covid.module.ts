import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidComponent } from './covid.component';
import { CovidApiService } from '../shared/services/covid.service';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [CovidComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [CovidApiService],
  exports: [CovidComponent]
})
export class CovidModule { }
