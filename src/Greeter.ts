export class Greeter {
  public handle(name: string | null): string {
    if (!name) return 'Hello, my friend.'
    return `Hello, ${name}.`
  }
}