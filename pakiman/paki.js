var imagenes = [];
imagenes["Cauchin"] = "vaca.png"; /* array asociativo*/
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push( new Pakiman("Cauchin", 100, 30) ); /*Atributos del objeto pakiman*/
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var paki of coleccion)
{
  paki.mostrar();
}

for(var x in coleccion[0]) /* in Itera en el indice*/
{
  console.log(x);
}
