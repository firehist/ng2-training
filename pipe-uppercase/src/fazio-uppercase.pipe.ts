import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fazioUppercase'
})
export class FazioUppercasePipe implements PipeTransform {
  transform(value: string, length: number = 1, start: number = 0): string {
    let end = start + length
    return value.slice(0, start) + value.slice(start, end).toUpperCase() + value.slice(end, value.length)
  }
}
