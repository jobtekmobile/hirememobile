import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { JobRequestDescDetails } from './jobrequestdetails';
import { JobTaskPipe } from '../../interfaces/filterpipe';

@NgModule({
  declarations: [JobRequestDescDetails,JobTaskPipe],
  imports: [IonicPageModule.forChild(JobRequestDescDetails),Ionic2RatingModule],
    entryComponents: [JobRequestDescDetails]
})
export class JobRequestDescDetailsModule { }