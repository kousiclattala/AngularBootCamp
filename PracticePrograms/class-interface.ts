interface Name{
    name: string
    getPerson(): void
}

interface UID{
    userId: number
}

class Person implements Name, UID{
    name: string
    userId: number

    constructor(name: string, userId: number){
        this.name = name
        this.userId = userId
    }

    getPerson(){
        console.log(`${this.name} with ID: ${this.userId}`)
    }
}

const person = new Person("Kousic", 1)
person.getPerson()