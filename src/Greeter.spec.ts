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
  })
  it('should return an uppercased greeting when an uppercased name is passed', () => {
    const { sut } = makeSUT()
    const name = 'RAPHAEL'
    const result = sut.handle(name)
    expect(result).toBe('HELLO RAPHAEL!')
  })
  it('should return the two names in the greeting when an array of names is passed', () => {
    const { sut } = makeSUT()
    const names = ['Raphael', 'Regiane']
    const result = sut.handle(names)
    expect(result).toBe('Hello, Raphael and Regiane.')
  })
  it('should return the greetings for more than two names when an array of names is passed', () => {
    const { sut } = makeSUT()
    const names = ['Raphael', 'Regiane', 'Maria']
    const result = sut.handle(names)
    expect(result).toBe('Hello, Raphael, Regiane and Maria.')
  })
  it('should return the greetings for more than two names where one or more is uppercased when an array of names is passed', () => {
    const { sut } = makeSUT()
    const names = ['Raphael', 'REGIANE', 'Maria']
    const result = sut.handle(names)
    expect(result).toBe('Hello, Raphael and Maria. AND HELLO REGIANE!')
  })
  it('should return the greetings for more than two names where the names are passed in the same string', () => {
    const { sut } = makeSUT()
    const names = ["Maria", "Raphael, Regiane"]
    const result = sut.handle(names)
    expect(result).toBe('Hello, Maria, Raphael and Regiane.')
  })
  it('should return the greetings for more than two names where the names are passed in the same string but with escaped double quotes', () => {
    const { sut } = makeSUT()
    const names = ["Maria", "\"Raphael, Regiane\""]
    const result = sut.handle(names)
    expect(result).toBe('Hello, Maria and Raphael, Regiane.')
  })
})