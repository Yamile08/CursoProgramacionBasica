var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {   /* Traer imagen */
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var pollo = {   /* Traer imagen */
  url: "pollo.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var cantidad = aleatorio(1, 10);/*INVOCA LA FUNCION aleatorio Y LE PASA COMO PARAMETROS 1,10 */ /*EL 1 Y EL 10 SON EL RANGO PARA LOS NUMEROS ALEATORIOS DONDE 1 ES MIN Y 10 ES MAX*/

fondo.imagen = new Image(); /* Dibujar fondo o cargar imagen al canvas*/
fondo.imagen.src = fondo.url;  /*Ruta de la imagen*/
fondo.imagen.addEventListener("load", cargarFondo);   /*Cargar imagen en canvas*/ /*Disparar el evento load*/

vaca.imagen = new Image(); /* Dibujar imagen o cargar imagen al canvas*/
vaca.imagen.src = vaca.url; /*Ruta de la imagen*/
vaca.imagen.addEventListener("load", cargarVacas); /*Cargar imagen en canvas*/

pollo.imagen = new Image(); /* Dibujar fondo o cargar imagen al canvas*/
pollo.imagen.src = pollo.url;  /*Ruta de la imagen*/
pollo.imagen.addEventListener("load", cargarPollos);   /*Cargar imagen en canvas*/

cerdo.imagen = new Image(); /* Dibujar imagen o cargar imagen al canvas*/
cerdo.imagen.src = cerdo.url; /*Ruta de la imagen*/
cerdo.imagen.addEventListener("load", cargarCerdos); /*Cargar imagen en canvas*/

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}


function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0); /*coordenadas en x y y dodnde se va a mostrar el fondo en el canvas*/
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
}
function aleatorio(min, maxi) /*PARAMETROS DE LA FUNCION ALEATORIO(min,max)*/
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min; /* OBTENER UN NUMERO ALEATORIO */
  return resultado; /*ME RETORNA EL RESULTADO DE LA ECUACION, EN ESTE CASO DE LA VARIABLE RESULTADO*/
}

// for (var i = 0; i < 10; i++) {     /*FOR PARA MOSTRAR NUMEROS ALEATORIOS SEGUIDOS*/
//   z= aleatorio(5,0)
//   document.write(z + ",");
// }
