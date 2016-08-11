import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { StateService } from './common/state.service'
import { ExperimentsService } from './common/experiments.service'

@Component({
  selector: 'nat-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [StateService, ExperimentsService],
})
export class AppComponent {
  name: string = 'my-awesome-app'
  version: string = '1.0.0'
}
