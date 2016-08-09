import { Component,EventEmitter,Output,ViewChild } from '@angular/core';

@Component({
  selector: 'tripleclic',
  template: `
    <div #myElement style="-webkit-user-select:none;-moz-user-select:none;border:1px solid black;width:100px;height:100px;" unselectable="on" (click)="handleClick()">
      Click here 3x times
    </div>
  `
})
export class TripleClicComponent {
  @Output('tripleclickalias') tripleclick: EventEmitter = new EventEmitter()
  @ViewChild('myElement') clickButton: ElementRef;

  private _colors: String[] = ['orange', 'green', 'red', 'purple']
  private _count: number = 0

  constructor() {}
  handleClick() {
    if(++this._count % 3 === 0) {
      this.clickButton.nativeElement.style.backgroundColor = this._colors[Math.floor(Math.random()*this._colors.length)];
      this.tripleclick.emit(`Awesome, you dude clicked ${this._count} times`)
    }
  }

}