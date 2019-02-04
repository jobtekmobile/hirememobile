import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { CreateJobRequestForm } from './createjobrequestform';

@NgModule({
  declarations: [CreateJobRequestForm],
  imports: [IonicPageModule.forChild(CreateJobRequestForm)],
    entryComponents: [CreateJobRequestForm]
})
export class CreateJobRequestFormModule { }