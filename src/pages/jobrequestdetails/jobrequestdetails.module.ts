import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { JobRequestDescDetails } from './jobrequestdetails';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'jobTaskPipe' })
export class JobTaskPipe implements PipeTransform {
  transform(elements: any[]) {
    return elements.filter(hero => !hero.ParentJobTaskId);
  }
}
@NgModule({
  declarations: [JobRequestDescDetails,JobTaskPipe],
  imports: [IonicPageModule.forChild(JobRequestDescDetails),Ionic2RatingModule],
    entryComponents: [JobRequestDescDetails]
})
export class JobRequestDescDetailsModule { }