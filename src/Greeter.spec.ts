import { Greeter } from "./Greeter"


function makeSUT (): { sut: Greeter } {
  return { sut: new Greeter() }
}

describe('greet function test', () => {
  it('should return a simple greeting when a name is passed through the param', async () => {
    const { sut } = makeSUT()
    const name = 'Raphael'
    const result = sut.handle(name)
    expect(result).toBe('Hello, Raphael.')
  })
})