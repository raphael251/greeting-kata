export class Greeter {
  public handle(names: string | null | Array<string>): string {
    if (!names) return 'Hello, my friend.'

    if (typeof names === 'string' && names === names.toUpperCase()) return `HELLO ${names}!`

    if (typeof names === 'string') return `Hello, ${names}.`

    if (Array.isArray(names)) {
      names = this.separateNamesWhenTheyAreInAnUniqueString(names)
      
      const hasUppercasedName = names.filter(el => el === el.toUpperCase()).length > 0

      if (hasUppercasedName) {
        const uppercasedNames = names.filter(el => el === el.toUpperCase())
        const normalNames = names.filter(el => el !== el.toUpperCase())

        const normalNamesGreeting = this.handleNormalGreeting(normalNames)
        const uppercasedNamesGreeting = this.handleUppercasedGreeting(uppercasedNames)
        
        return normalNamesGreeting.concat(uppercasedNamesGreeting)
      } else {
        return this.handleNormalGreeting(names)
      }
    }

    throw new Error('The system is not prepared for this greeting')
  }

  separateNamesWhenTheyAreInAnUniqueString(names: Array<string>): Array<string> {
    const separatedNames = []
    for (const name of names) { separatedNames.push(...name.split(', ')) }
    return separatedNames
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