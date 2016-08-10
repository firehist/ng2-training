import "core-js"
import "zone.js/dist/zone"

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module'

console.log(AppModule)

platformBrowserDynamic().bootstrapModule(AppModule)
