export class Greeter {
  public handle(name: string | null | Array<string>): string {
    if (!name) return 'Hello, my friend.'
    if (typeof name === 'string' && name === name.toUpperCase()) return `HELLO ${name}!`
    if (Array.isArray(name) && name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`
    return `Hello, ${name}.`
  }
}