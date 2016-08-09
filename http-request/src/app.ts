import {Component, Inject} from '@angular/core'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUser } from './user.model'
import { ApiService } from './api.service'

@Component({
  selector: 'app',
  template: `
    <h1>Http Request</h1>
    <p>Awesome HTTP Request</p>
    <h2>Users list <pre>Promise&lt;User[]&gt;</pre></h2>
    <ul>
      <li *ngFor="let user of usersPromise | async">{{ user.username }} <{{ user.email }}></li>
    </ul>
    <h2>Users list <pre>Observable&lt;User[]&gt;</pre></h2>
    <ul>
      <li *ngFor="let user of usersObservable | async">{{ user.username }} <{{ user.email }}></li>
    </ul>
  `,
  providers: [ ApiService ]
})
export class App {
  users: IUser[]
  usersPromise: Promise<IUser[]>
  usersObservable: Observable<IUser[]>

  constructor(@Inject(ApiService) private _apiService: ApiService) {
    // Promise
    this.usersPromise = this._apiService.getUsersPromise()
      .then(res => res.json())
    // Promise
    this.usersObservable = this._apiService.getUsersObservable()
      .map(res => res.json())

    //Errors
    this._apiService.getUserErrored()
      .catch(err => console.log(`my custom error ${err}`))
  }
}
