import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { PublishedJobDesc } from './publishedjobdesc';



@NgModule({
  declarations: [PublishedJobDesc],
  imports: [IonicPageModule.forChild(PublishedJobDesc),Ionic2RatingModule],
    entryComponents: [PublishedJobDesc]
})
export class PublishedJobDescModule { }