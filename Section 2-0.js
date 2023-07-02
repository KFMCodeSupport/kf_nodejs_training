// Start
console.log("Hello World !!!")

////////// Variables //////////
let vari = 1;
vari = 2;

const vari2 = 1;
//vari2 = 2 - Loi
////////// For Loop //////////
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
////////// For While //////////
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

////////// Funcstion //////////
const FunctionEXP = function(string) {
    return(console.log("FunctionEXP "+string))

}
FunctionEXP("Truyen Vao")
// Funcstion Arrow
const FuncstionEXP2 = (string) => { 
    return(console.log("FuncstionEXP2 "+string))
}
FuncstionEXP2("Truyen Vao 2")

////////// Object //////////
const people = {
    name: "DarkCrusader",
    Age: 15,
    skill: function() {
        console.log("My name is: "+this.name);
    }
}

people.skill();

////////// Array //////////
// Ta co array
const array = ["Muoi","Tam","Cong"];

// In ra mang array nay , cong them ky tu dang truoc , for loop
for (let printarray of array) {
    console.log("Them Dang Truoc "+printarray);
}

//Cook array
/// Them dang truoc array
console.log(array.map(addarray => "Them vao dang truoc " + addarray));

/// Them vao mang array
array.push("Chin Chin"); // tuong tu voi pop la se lay ra
console.log(array)

// Clone ra mot array khac
const clonearray = array.slice(1,4);
console.log(clonearray)

// Spread array
const spreadarray = [...array]
console.log(spreadarray)

// Truyen array vao func
const toArray = function(...arg) {
    return arg;
}
console.log(toArray(1,1,1,1,1));