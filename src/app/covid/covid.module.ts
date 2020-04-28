import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidComponent } from './covid.component';
import { CovidApiService } from '../shared/services/covid.service';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [CovidComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [CovidApiService],
  exports: [CovidComponent]
})
export class CovidModule { }
