import "core-js"
import "zone.js/dist/zone"

import { bootstrap } from "@angular/platform-browser-dynamic"

import { APP_ROUTES } from "./app.route"
import { AppComponent } from "./app.component"

bootstrap(AppComponent, [
  APP_ROUTES
])
