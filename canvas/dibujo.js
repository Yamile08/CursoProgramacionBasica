var texto = document.getElementById("texto_lineas"); /*con getElementById obtenemos un id de Html*/
var boton = document.getElementById("botoncito");
boton.addEventListener("click", DibujoPorClick ); /*activar el boton cuando el usuario de click sobre el*, dispara la funcion DibujoPorClick cuando de la click*/

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d"); /*getContext Funcion del objebto canvas, me permite obtener el area donde voy a dibujar */


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, ) /*Funcion que recibe parametros, a cantidad que nececitemos*/
{
  lienzo.beginPath(); <!-- Arrancar o Iniciar  a dibujar -->
  lienzo.strokeStyle = color;<!-- color del trazo -->
  lienzo.moveTo(xinicial, yinicial); <!--moverse al punto que deseamos en el canvas  -->
  lienzo.lineTo(xfinal, yfinal); <!--creamos linea diagonal  -->
  lienzo.stroke(); <!--cerramos la linea  -->
  lienzo.closePath(); <!-- terminamos la linea O termina dibujo-->
}

function DibujoPorClick() /*funcion para activar el click  , FNCION SIN PARAMETROS, SIRVA SOLO PARA ACTIVAR EL CLICK*/
{
  var lineas = parseInt(texto.value); /*VALUE ES LA FORMA DE OBTENER EL VALOR DEL FORMULARIO Y/O CAJA DE TEXTO, parseInt CONVIERTE EL VALOR DE ESE TEXTO A UN NUMERO*/
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  for (l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarlinea(colorcito, 0, yi, xf, 300);
    console.log("linea" + 1);
  }

  // for (l = 0; l < lineas; l++) /*FOR PARA DIBUJAR LA CURVA EN TODAS LAS SUPERFICIES DEL CANVAS*/
  // {
  //   yi = espacio * l;
  //   xf = espacio * (l + 1);
  //   xf_2 = 300 - (l * espacio);
  //   dibujarlinea(colorcito, 0, yi, xf, 300); //Esquina inferior izquierda
  //   dibujarlinea(colorcito, 300, yi, xf_2, 300); //Esquina inferior Derecha
  //   dibujarlinea(colorcito, xf_2, 0, 0, xf); //Esquina superior izquierda
  //   dibujarlinea(colorcito, 300, xf_2, xf_2, 0); //Esquina superior derecha
  //   console.log("linea" + 1);
  // }

  // while (l < lineas) CICLO CON WHILE
  // {
  //   yi = 10 * l;
  //   xf = 10 * (l + 1);
  //   dibujarlinea(colorcito, 0, yi, xf, 300);
  //   console.log("linea" + 1);
  //   l = l + 1;
  // }

  /*Dibujar las ñineas de los bordes */
  dibujarlinea(colorcito, 1, 1, 1, 299);
  dibujarlinea(colorcito, 1, 299, 299, 299);
}
