import {Component} from '@angular/core'
import { TypeaheadDirective } from './typeahead.component'

@Component({
  selector: 'app',
  template: `
    <h1>Directive jQuery typeahead</h1>
    <p>We used this plugin: <a href="https://github.com/running-coder/jquery-typeahead" target="_blank">https://github.com/running-coder/jquery-typeahead</a></p>
    <hr>
    <pre>
    myField value: {{ myField }}
    </pre>
      <hr>
      <form id="form-country_v1" name="form-country_v1">
        <div class="typeahead__container">
            <div class="typeahead__field">
     
                <span class="typeahead__query">
                    <input [(ngModel)]="myField" typeahead name="country_v1[query]" type="search" placeholder="Search" autocomplete="off">
                </span>
                <span class="typeahead__button">
                    <button type="submit">
                        <i class="typeahead__search-icon"></i>
                    </button>
                </span>
     
            </div>
        </div>
    </form>
  `,
  directives: [ TypeaheadDirective ]
})
export class App {
  myField: string
  constructor() {}
}
