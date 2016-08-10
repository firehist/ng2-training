import { RouterModule } from '@angular/router'

import { HomeComponent } from "./home/home.component"
import { AboutComponent } from "./about/about.component"
import { ExperimentsComponent } from "./experiments/experiments.component"

const routes  =  [
  {path: '',            component: HomeComponent },
  {path: 'home',        component: HomeComponent },
  {path: 'about',      component: AboutComponent },
  {path: 'experiments', component: ExperimentsComponent },
  {path: '*',           component: HomeComponent }
]

export const APP_ROUTES = [
  RouterModule.forRoot(routes)
]
