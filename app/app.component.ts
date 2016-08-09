import { Component } from '@angular/core'
import { IAppComponent } from './app.model'

@Component({
    selector: 'app',
    template: `
        Awesome :)
    `
})
export class AppComponent implements IAppComponent {
    public name: string = 'AwesomeApp'
    public version: string = '1.1.1'

    constructor() {
        console.log(`Applications ${this.name} - version: ${this.version}`)
    }
}