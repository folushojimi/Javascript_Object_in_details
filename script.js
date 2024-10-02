//OBJECTS IN JAVASCRIPT 


//it’s almost impossible to build applications
 //without grouping related data in objects.They help make your code
 //organized, easytoread, and maintainable.

//basic object 
const myTools =
{
    laptop:'Dell',
    keyboard:'Acer',
    headset:'qyc'

}

console.log(myTools)

//dot notation
console.log(myTools.laptop)
//bracket
console.log(myTools['laptop'])

//more on bracket - to access property whose name is stored in a variable 

const propertyName = 'keyboard'
console.log(myTools[propertyName])

//RULES OF CREATING AN OBJECT 

//Unique Property Name 


//property name must be a string 
const numberOfHouse = 
{
    1:'no 16'
}

console.log(numberOfHouse['1'])

//invalid javascript identifier must enclosed in qoute 
const newObj = {

    'name type':'asia'
        
    }

    console.log(newObj["name type"])


    const oldObj = {

        'country*type':'africa'
            
        }
    
        console.log(oldObj["country*type"])

//
//Property case sensitivty, name is mot the same thing as Name

//property name can be any valid javascript expression
//when a function is used in an object its callled method 
//this keyword - using this.name in your method refers to the object name 
//

// Error in Code 
const person = {
    fullName:'Emmanuel Ogunjimi',
    sayHello: function() {
        console.log('Hello! my name is'  +  this.name)
    }
}    


person.sayHello()


//Adding,modifyingandRemoving Properties

// Adding
const student = {
    name:'emmanuel',
    age: 25,
}

student.gender = 'Male'
console.log(student)

//not so useful 
student['grade'] = 13

console.log(student.grade)

//OBJECT METHODS (Learn more from MDN DOCS)

//using Object.property add new property to our object
Object.defineProperty(student, 'school', {
    value: 'University of Lagos',
    writable:false,
    enumerable:true,
    configurable: true,
})

console.log(student)

student.school = 'Havard University'

console.log(student.school)

//delete keyword - used remove a property

delete student.school

console.log(student.school)

//using Object.property add new property to our object that cant be deleted

Object.defineProperty(student, 'language',
    {
value:'english',
writable:true,
enumerable: true,
configurable:false,
    })

    console.log(student.language)

delete student.language

// OBJECT PROTOTYPE 
const phoneInfo = {
    brand:'samsung',
    model:'s24',
    color:'purple'
}

console.log(phoneInfo.toString())

//not working now
JSON.stringify(phoneInfo)
Object.getPrototypeOf(phoneInfo)
Object.getPrototypeOf(phoneInfo).isExpensive = true
console.log(phoneInfo.isExpensive)

// USEFUL OBJECT METHODS IN JAVASCRIPT
//all this object methods are mainly used to
//add, modify, and retrive data from an object 

// Object.keys() - returns an array of a given object property names

const techGuidiance = 
{
name:'Mr Adeleke',
job:'Tech Specialist',
hobbies:'drawing, swimming, dancing',

}
//Prints array of property names
Object.keys(techGuidiance)

// Object.values()
//Prints array of property values in an object
Object.values(techGuidiance)

// Object.entries() - returns an array of a given object property and values 
const newlaw = Object.entries(techGuidiance)
console.log(newlaw)

// Object.assign() - copies property from one or more source
//to a targeted object, here we simply reassign them to new variable.
//can simply be used to marge objects together too

const peptalk = 
{
id:'123434',
date:'10/10/2024'
}

const pepDetailsMarge = Object.assign({},techGuidiance, peptalk)

console.log(pepDetailsMarge)


// Object.freeze() - its mostly used to lock an object
Object.freeze(peptalk)

peptalk.hey = 'money'

console.log(peptalk.hey)


//  Object.seal() - its more like freez, also lucks the object from getting modified anyway

Object.seal(techGuidiance)
techGuidiance.pep = 'new'
console.log(techGuidiance)

//LEARN MORE ABOUT OBJECT AND MORE OF IT METHODS ON MDN DOCS AND JAVASCRIPT INFO



// OBJECT DESTRUCTURING - NEEDS TO MASTER

const attendee = {
    name:'Emmanuel',
    age:25,
    email:'iamrblogger@gmail.com',
    ticketType: 'VIP'
}

const {name: attendeeName, age, email, ticketType} = attendee

console.log(email);
console.log(attendeeName); // to avoid naming conflict
console.log(age);
console.log(ticketType)

// we can destructure only the properties that we need/
//if we dont want to destructure everything.
{
    const {age} = attendee
    console.log(age)
    
}
 



