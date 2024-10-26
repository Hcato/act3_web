import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeee',
  standalone: true
})
export class PipeeePipe implements PipeTransform {
  private badWordsList: string[] = ['merequetengue', 'mondongo', 'loca'];

  transform(value: string): string {
    if (!value) {
      return value;
    }

    let filteredText = value;
    this.badWordsList.forEach((badWord) => {
      const regex = new RegExp(badWord, 'gi'); 
      filteredText = filteredText.replace(regex, '***');
    });

    return filteredText;
  }
}
