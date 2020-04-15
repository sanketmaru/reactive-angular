import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidComponent } from './covid.component';
import { CovidApiService } from '../shared/services/covid.service';


@NgModule({
  declarations: [CovidComponent],
  imports: [
    CommonModule
  ],
  providers: [CovidApiService],
  exports: [CovidComponent]
})
export class CovidModule { }
