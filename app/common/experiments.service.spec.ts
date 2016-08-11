import { ExperimentsService } from "./experiments.service"

describe('Experiments service', () => {

  beforeEach(() => {
    this.service = new ExperimentsService()
  })

  it('should use set up experiment service', () => {
    expect(this.service.getExperiments()).toBeDefined()
    expect(this.service.getExperiments().length).toBe(4)
  })

})
