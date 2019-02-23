
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'jobTaskPipe' })
export class JobTaskPipe implements PipeTransform {
  transform(elements: any[]) {
    return elements.filter(hero => !hero.ParentJobTaskId);
  }
}