import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { CreateJobOfferForm } from './createjobofferform';
import { JobTaskPipe } from '../../../interfaces/filterpipe';



@NgModule({
  declarations: [CreateJobOfferForm,JobTaskPipe],
  imports: [IonicPageModule.forChild(CreateJobOfferForm)],
    entryComponents: [CreateJobOfferForm]
})
export class CreateJobOfferFormModule { }