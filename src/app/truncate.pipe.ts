import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(string: string): string {
    let shortString;
    if(string !== undefined) {
      shortString = string.length>60 ? string.substring(0,56)+'...' : string;
    }

    return shortString;
  }

}
