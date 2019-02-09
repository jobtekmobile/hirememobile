import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobOfferNotePage } from './joboffernote';

@NgModule({
  declarations: [
    JobOfferNotePage,
  ],
  imports: [
    IonicPageModule.forChild(JobOfferNotePage),
  ],
})
export class JobOfferNotePageModule {}
