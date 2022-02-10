import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: string[], filterText: string): string[] {

    if (!filterText.trim()) {
      return value;
    }

    const lowercaseFilterText = filterText.toLocaleLowerCase();

    return value.filter(i => {
      return i.toLocaleLowerCase().includes(lowercaseFilterText);
    });
  }

}
