import { UclastPipe } from './uclast.pipe'

describe('Uclast pipe', () => {
  let pipe: UclastPipe;
  beforeEach(() => {
    pipe = new UclastPipe()
  })

  it('should return last character in uppercase', () => {
    expect(pipe.transform('abcdef')).toBe('abcdeF')
    expect(pipe.transform('ABCDEF')).toBe('abcdeF')
    expect(pipe.transform('abcdef!')).toBe('abcdef!')
  })
})
