import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'www'
})
export class WwwPipe implements PipeTransform {

  transform(value: any): any {
    if(value.indexOf("http://") != -1){
      return value.replace("http://", "www.");
    }
      return value.replace("https://", "www.");
  }

}
