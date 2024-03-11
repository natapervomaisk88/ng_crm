import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true,
})
export class TitlePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return null;
    else {
      let words: Array<any> = [];
      for (let i = 0; i < value.length; i++) {
        if (i % 2 == 0) {
          words[i] = value[i].toUpperCase();
        } else {
          words[i] = value[i].toLowerCase();
        }
      }
      return words.join('');
    }
  }
}
