import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser'
import { FormsModule }    from '@angular/forms'
import { CommonModule } from '@angular/common'

import { UclastPipe }     from "./common/uclast.pipe"
import { APP_ROUTES }     from "./app.route"
import { AppComponent }   from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
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

