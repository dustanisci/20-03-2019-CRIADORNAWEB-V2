import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCapitalize'
})
export class TextCapitalizePipe implements PipeTransform {

  transform(input: string): string {
    return input.length === 0 ? '' :
      input.charAt(0).toUpperCase() + input.slice(1);
  }

}
