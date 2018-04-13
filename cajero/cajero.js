class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() /*Funcion disparada al hacer click en el boton extraer*/
{
  var caja_texto = document.getElementById("dinero");
  dinero = parseInt(caja_texto.value);
  for(var billetico of caja) /*Iteracion y/o corriendo por cada uno de los elementos  del array que se llama caja*/
  {

    if(dinero > 0)
    {
      division = Math.floor(dinero / billetico.valor); /* la variable dinero que ya tiene un valor dividido por el billete que me esta iterando la variable billetico*/

      if(division > billetico.cantidad)
      {
        papeles = billetico.cantidad;
      }
      else
      {
        papeles = division;
      }

      entregado.push( new Billete(billetico.valor, papeles) );
      dinero = dinero - (billetico.valor * papeles);
    }

  }

  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :("; /*Forma correcta de hacer un Document.write*/
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
              resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />"; /*  += Indica que la variable es igual a su vaalor mas lo que halla despues del operador*/
      }
    }
  }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );
var dinero = 0;
var division = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);
