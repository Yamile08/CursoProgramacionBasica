var numeros = 100;
var divisible = false;

for(var i = 1; i <= 100; i++) /* Imprimir los numeros del 1 al 100*/
{
  if(esDivisible(i,3))  /*Saber si el numero es divisible de tres */
  {
    document.write("Fizz");
  }

  if(esDivisible(i,5)) /*Saber si el numero es divisible de cinco */
  {
    document.write("Buzz");
  }

  if(!esDivisible(i,3) && !esDivisible(i,5)) /* SI NO ES DIVISIBLE DE 3 Y NO ES DIVISIBLE DE 5 MUESTREME EL NUMERO*/
  {
    document.write(i);
  }
  document.write("<br />");
}

function esDivisible(num, divisor) 
{
  if(num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
