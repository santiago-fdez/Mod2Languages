//EJERCICIO 1
// 1.a. Head. DESTRUCTURING
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.


const head = ([first,]) => first; //Receives array
const students = ["Alan", "Evan", "Ana"];
console.log(head(students));
console.log(students);


//1.b. Tail. REST
//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.


const tailArray = ([first,...other]) => other; //Receives arrary
const students = ["Alan", "Evan", "Ana"];
console.log(students);
console.log(tailArray(students));


// 1.c. Init Array.Prototype
//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.


const init = (myArray) => myArray.slice(0,-1); // Implementation here.
const students = ["Alan", "Evan", "Ana"];
console.log(students);
console.log(init(students));



//1.d Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (myArray) => myArray.slice(-1); //Receives array
const students = ["Alan", "Evan", "Ana"];
console.log(students);
console.log(last(students));


//EJERCICIO 2 CONCATs
//2. Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.


const concat = (a, b) => [...a,...b]; // Implementation here.
const students1ESO = ["Alan", "Evan", "Ana"];
const students2ESO = ["John", "Peter", "Mark"];
console.log(students1ESO);
console.log(students2ESO);
console.log(concat(students1ESO,students2ESO));


//2. Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).


const concat = (...args) => { 
    let result=[];
    args.forEach(value => {
        result=[...result,...value];
      });
    return result;    
} 

const students1ESO = ["Alan", "Evan", "Ana"];
const students2ESO = ["John2", "Peter2", "Mark2"];
const students3ESO = ["John3", "Peter3", "Mark3"];
console.log(concat(students1ESO,students2ESO,students3ESO));



//3. Clone y Merge

//3.a Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) { //shallow copy
  copy={...source};
  return copy;
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b=clone(a)
console.log(b);


// 3.b Merge - Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.


function clone(source) { //shallow copy
    copy={...source};
    return copy;
  }

function merge(source, target) {
  result=clone(source);
  for (var [key, value] of Object.entries(target)) {
  result[key]=value;
  }
  return result;
}

const c = { name: "Maria", surname: "Ibañez", country: "SPA" };
const d = { name: "Luisa", age: 31, married: true };
const e=merge(c, d);
console.log(e); 


// 4. READ BOOKS


function isBookRead(books, titleToSearch) {
  const contains = (element) => element.title===titleToSearch;
  const results = books.filter(contains);
  return (results.length===0 ?  false: results[0].isRead);
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
const titulo="Devastación";
console.log(isBookRead(books, titulo));


//SLOT MACHINE

class SlotMachine {
    constructor (){
      this.coins=0;
    }
    play(){
      this.coins++;
      let rulettes=[Math.random(),Math.random(),Math.random()]
      const isTail = (element) => element>=0.5;
      console.log(rulettes,isTail); 
      if (rulettes.every(isTail)) {
            console.log('Congratulations, you won ' + this.coins + ' coins');
            this.coins=0; 
          }
      else {console.log('Good Luck, next time');}
    }
  }
  
  const machine1=new SlotMachine();
  machine1.play();
  machine1.play();
  machine1.play();
  
