export class Greeter {
  public handle(name: string | null): string {
    if (!name) return 'Hello, my friend.'
    if (name === name.toUpperCase()) return `HELLO ${name}!`
    return `Hello, ${name}.`
  }
}