import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { JobResponseDescDetails } from './jobresponsedetails';


@NgModule({
  declarations: [JobResponseDescDetails],
  imports: [IonicPageModule.forChild(JobResponseDescDetails),Ionic2RatingModule],
    entryComponents: [JobResponseDescDetails]
})
export class PublishedJobDescModule { }