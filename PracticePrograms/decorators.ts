function CanFly(constructorFunction: Function){
    CanFly.prototype.fly = true
}

@CanFly //* This is called Decorator
class Greet{
    name: string
    msg: string

    constructor(name: string, msg: string){
        this.name = name
        this.msg = msg
    }
}

// * Intially if we run Greet class we will get response as Undefined in the log statement
// * after including the decorator we will get the rsponse as true
// * in the decorator we are adding the fly property using [[prototype]]  

const josh = new Greet("Josh","Hola")
console.log(josh)
console.log(`CAN I FLY: ${josh['fly']}`)

const jack = new Greet("Jack","Hello")
console.log(jack)
console.log(`CAN I FLY: ${jack['fly']}`)