import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'www'
})
export class WwwPipe implements PipeTransform {

  transform(value: any): any {
    return value.replace("http://", "www.");
  }

}
