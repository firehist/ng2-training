import { Injectable, Inject } from "@angular/core"
import { Http } from "@angular/http"

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ApiService {
  constructor(@Inject(Http) private _httpService: Http) {}
  getUsersPromise () {
    return this._httpService.get('http://jsonplaceholder.typicode.com/users')
      .toPromise()
      .catch(console.error)
  }
  getUsersObservable () {
    return this._httpService.get('http://jsonplaceholder.typicode.com/users')
      .catch(console.error)
  }

  getUserErrored () {
    return this._httpService.get('http://jsonplaceholder.typicode.com/usersdeaea')
      .map(res => res.json())
      .catch(console.error)
  }
}
