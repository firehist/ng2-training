import {
  inject,
  TestBed,
} from '@angular/core/testing'

import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ExperimentsComponent } from './experiments.component'
import { ExperimentsService } from "../common/experiments.service"
import { StateService } from '../common/state.service'
import { UclastPipe } from "../common/uclast.pipe"
import { ExperimentDetailComponent } from "./experiment-details/experiment.detail.component"

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
)

describe('Experiments component', () => {
  let moduleConfig = {
    providers: [ExperimentsService, StateService],
    imports: [CommonModule, FormsModule],
    declarations: [ExperimentsComponent, ExperimentDetailComponent, UclastPipe]
  }

  beforeEach(() => TestBed.configureTestingModule(moduleConfig))

  it('should use set up providers', inject([ExperimentsService], (service: ExperimentsService) => {
    expect(service.getExperiments().length).toBe(4)
  }))

  it('should use set up directives and pipes', () => {
    const compFixture = TestBed.createComponent(ExperimentsComponent)
    let el = compFixture.nativeElement
    compFixture.detectChanges()
    expect(el.querySelectorAll('nat-experiment').length).toBe(compFixture.componentInstance.experiments.length)
  })

})
