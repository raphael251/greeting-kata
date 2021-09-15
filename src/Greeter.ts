export class Greeter {
  public handle(names: string | null | Array<string>): string {
    if (!names) return 'Hello, my friend.'

    if (typeof names === 'string' && names === names.toUpperCase()) return `HELLO ${names}!`

    if (typeof names === 'string') return `Hello, ${names}.`

    if (Array.isArray(names)) {
      const separatedNames: string[] = this.separateNamesIfNecessary(names)
      
      const uppercasedNames = separatedNames.filter(el => el === el.toUpperCase())
      const normalNames = separatedNames.filter(el => el !== el.toUpperCase())
      
      const capitalizedNamesGreeting = this.handleCapitalizedNamesGreeting(normalNames)
      
      if (uppercasedNames.length > 0) {
        const uppercasedNamesGreeting = this.handleUppercasedNamesGreeting(uppercasedNames)
        return capitalizedNamesGreeting.concat(uppercasedNamesGreeting)
      } else {
        return capitalizedNamesGreeting
      }
    }

    throw new Error('The system is not prepared for this greeting')
  }

  separateNamesIfNecessary(names: string[]): string[] {
    const separatedNames: string[] = []
    for (const name of names) {
      // escaped name example: \"Name1 , Name2\"
      const hasEscapedName = new RegExp('^[\\]["](.+)[\\]["]$', 'gm').exec(name)
      if (hasEscapedName) {
        const escapedName = hasEscapedName[1]
        separatedNames.push(escapedName)
        continue
      }
      const namesSeparatedByCommas: string[] = name.split(', ')
      separatedNames.push(...namesSeparatedByCommas)
    }
    return separatedNames
  }

  public handleUppercasedNamesGreeting(names: Array<string>): string {
    let greeting = ' AND HELLO'

    if (names.length === 1) greeting = greeting.concat(` ${names[0]}!`)
    return greeting
  }

  public handleCapitalizedNamesGreeting(names: Array<string>): string {
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