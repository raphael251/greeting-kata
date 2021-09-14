export class Greeter {
  public handle(name: string | null | Array<string>): string {
    if (!name) return 'Hello, my friend.'

    if (typeof name === 'string' && name === name.toUpperCase()) return `HELLO ${name}!`

    if (Array.isArray(name)) {
      if (name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`

      if (name.length > 2) {
        let greeting = 'Hello'
        for (let i = 0; i < name.length; i++) {
          if (i === name.length - 1) { 
            greeting = greeting.concat(` and ${name[i]}.`)
            continue
          }
          
          greeting = greeting.concat(`, ${name[i]}`)
        }
        return greeting
      }
    }

    return `Hello, ${name}.`
  }
}