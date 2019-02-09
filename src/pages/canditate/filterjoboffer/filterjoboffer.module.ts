import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterJobOfferPage } from './filterjoboffer';

@NgModule({
  declarations: [
    FilterJobOfferPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterJobOfferPage),
  ],
})
export class FilterJobOfferPageModule {}
