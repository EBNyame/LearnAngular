import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: string, appendTest: string):string {
    if(value == null) return value;
    return value + appendTest
  }

}
