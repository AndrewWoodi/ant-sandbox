import { Pipe, PipeTransform } from '@angular/core';
import { powers } from 'src/app/model';

@Pipe({
  name: 'qualifiers',
  pure: true,
})
export class QualifiersPipe implements PipeTransform {
  transform(powerSource: string) {
    const power = powers.find((p) => p.name === powerSource);
    return power ? power.qualifiers : [];
  }
}
