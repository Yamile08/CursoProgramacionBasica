function pakiman(vida)
{
    vida = vida + vida;
    vida++;
    return vida;
}
var vida = 2;
vida = pakiman(vida);
console.log(vida);

//

var billetes = [ [ 1 , 2 , 3 ] ,
              [ 4 , 5 , 6 ] ,
              [ 7 , 8 , 9 ] ];
console.log(billetes[1][2])

//

var contador = 2;
var na = "na";
while(contador)
{
    na += na;
    contador -= 1;
}
console.log(na + " Freddy ")

//

console.log(variable);
function declarar() {
   variable = 12;
}

//

var variable;
if(variable) {
  console.log("funciona");
}
else{
  console.log("no funciona");
}


var entrar = 0;
var altura = 101;
if( altura > 100 || altura < 50){
    entrar = 1;
}
else if(altura > 60 || altura < 40){
    entrar = 2;
}
console.log(entrar);



function declarar() {
   variable = 12;
}
declarar();
console.log(variable);




function pakiman(vida)
{
    vida = vida + vida;
    vida++;
    return vida;
}
var vida = 2;
vida = pakiman(vida);
