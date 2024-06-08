const person = {
    //name: ['Bob', 'Smith'],
    name: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
    },

    introduce: function() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

function logProperty(propertyName) {
    console.log(person[propertyName]);
}


//This

function createObject(Name) {
    const obj = {};

    obj.name = Name;
    obj.introduce = function() {
        console.log(`Hi! this is ${this.name}`);
    }

    return obj;
}


createObject("srinu");


//Constructor

function person1(Name) {
    this.name = Name;   
    this.greet = function() {
        console.log(`Hi! this is ${this.name}`);
    }
}

const date = new Date(2003, 11, 22);

console.log(date.getFullYear());

date.getFullYear = function() {
    console.log("Enter something else");    
}

//Setting a prototype

const PersonPrototype = {
    greet() {
        console.log("hello");
    },
};

function person2(Name) {
    this.name = Name;
    
}



const carl = Object.create(PersonPrototype);
carl.greet();

Object.assign(person2.prototype, PersonPrototype);

const proto = {
    getName() {
        console.log("Srinu");
    },
    getAge() {
        console.log(20);
    },
    getStudy() {
        console.log("B.TEch");
    },
}


const srinu = Object.create(proto);


//Classes and Constructors

class Animal {
    sleep() {
        console.log("ZZZZZZZ");
    }
}

class People {
    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

class Professor extends People {
    teaches = "";

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }

    grade(paper) {
        const g = Math.floor(Math.random*(5-1) + 1);
        console.log(g);
    }
}

class Student extends People {
    #year;

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and I'm from ${this.#year}`);
        this.#callMe();
    }

    canStudyArchery() {
        return this.#year > 1;
    }



    #callMe() {
        console.log(`Call me just ${this.name}`);
    }
}


//Working with JSON

const superHeros = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": 
    [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
}

const arr = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
]
  
  


