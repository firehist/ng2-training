import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(() => {
    this.app = new AppComponent()
  })
  it('should be a function', () => {
    expect(typeof AppComponent).toBe('function')
  })
  it('should have name property', () => {
    expect(this.app.name).toBeDefined()
    expect(this.app.name).toBe('my-awesome-app')
  })
  it('should have a version property', () => {
    expect(this.app.version).toBeDefined()
    expect(this.app.version).toBe('1.0.0')
  })
})
