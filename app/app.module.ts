import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser'
import { FormsModule }    from '@angular/forms'

import { UclastPipe }     from "./common/uclast.pipe"
import { APP_ROUTES }     from "./app.route"
import { AppComponent }   from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES
  ],
  declarations: [
    AppComponent,
    UclastPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

