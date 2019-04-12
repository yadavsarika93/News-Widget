import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newFilter'
})
export class NewFilterPipe implements PipeTransform
 {

  transform(value: any, args?: any): any 
  {
    return null;
  }

}
