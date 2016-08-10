import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'natUclast'})
export class UclastPipe implements PipeTransform {
  transform(value = '') {
    let characters = value.split('')
    return characters.slice(0, characters.length - 1).map(i => i.toLowerCase()).join('') + characters[characters.length - 1].toUpperCase()
  }
}
