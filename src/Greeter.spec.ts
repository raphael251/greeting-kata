import { measureMemory } from "vm"
import { Greeter } from "./Greeter"


function makeSUT (): { sut: Greeter } {
  return { sut: new Greeter() }
}

describe('greet function test', () => {
  it('should return a simple greeting when a valid name is passed', async () => {
    const { sut } = makeSUT()
    const name = 'Raphael'
    const result = sut.handle(name)
    expect(result).toBe('Hello, Raphael.')
  })
  it('should return a pre defined greetin when the name passed is null', () => {
    const { sut } = makeSUT()
    const name = null
    const result = sut.handle(name)
    expect(result).toBe('Hello, my friend.')
  });
  });
})