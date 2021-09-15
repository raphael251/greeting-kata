export class Greeter {
  public handle(name: string | null | Array<string>): string {
    if (!name) return 'Hello, my friend.'

    if (typeof name === 'string' && name === name.toUpperCase()) return `HELLO ${name}!`

    if (Array.isArray(name)) {
        const hasUppercasedName = name.filter(el => el === el.toUpperCase()).length > 0

        if (hasUppercasedName) {
          const uppercasedNames = name.filter(el => el === el.toUpperCase())
          const normalNames = name.filter(el => el !== el.toUpperCase())

          const normalNamesGreeting = this.handleNormalGreeting(normalNames)
          const uppercasedNamesGreeting = this.handleUppercasedGreeting(uppercasedNames)
          
          return normalNamesGreeting.concat(uppercasedNamesGreeting)
        } else {
          return this.handleNormalGreeting(name)
        }
    }

    return `Hello, ${name}.`
  }

  public handleUppercasedGreeting(names: Array<string>): string {
    let greeting = ' AND HELLO'

    if (names.length === 1) greeting = greeting.concat(` ${names[0]}!`)
    return greeting
  }

  public handleNormalGreeting(names: Array<string>): string {
    let greeting = 'Hello'
    for (let i = 0; i < names.length; i++) {
      if (i === names.length - 1) { 
        greeting = greeting.concat(` and ${names[i]}.`)
        continue
      }
      greeting = greeting.concat(`, ${names[i]}`)
    }
    return greeting
  }
}