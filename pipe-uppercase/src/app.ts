import { Component } from '@angular/core';
import { FazioUppercasePipe } from './fazio-uppercase.pipe'

@Component({
  selector: 'app',
  template: `
    <p>{{ myVariable | fazioUppercase }}</p>
    <p>{{ myVariable | fazioUppercase:3 }}</p>
    <p>{{ myVariable | fazioUppercase:3:5 }}</p>
    <p>{{ myVariable | fazioUppercase:length:start }}</p>
  `,
  pipes: [ FazioUppercasePipe ]
})

export class App {
  myVariable: string = 'My awesome variable ;)'
  length: number = 3
  start: number = 5
}
