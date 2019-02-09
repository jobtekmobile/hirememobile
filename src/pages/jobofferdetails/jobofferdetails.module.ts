import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { JobOfferDetails } from './jobofferdetails';


@NgModule({
  declarations: [JobOfferDetails],
  imports: [IonicPageModule.forChild(JobOfferDetails),Ionic2RatingModule],
    entryComponents: [JobOfferDetails]
})
export class JobOfferDetailsModule { }