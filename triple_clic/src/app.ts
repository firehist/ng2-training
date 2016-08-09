import { Component,EventEmitter } from '@angular/core';
import { TripleClicComponent } from './tripleclic.component'

@Component({
  selector: 'app',
  template: `
    <tripleclic (tripleclick)="weGotATripleClick($event)"></tripleclic>
    {{ logs }}
    <p *ngFor="let log of logs">{{ log }}</p>
  `,
  directives: [ TripleClicComponent ]
})

export class App {
  logs: string[] = []

  weGotATripleClick(event: EventEmitter) {
    this.logs.push(<string>event)
  }
}