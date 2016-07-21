//2016 clase de programación creativa
//con estas rayitas puedo comentar sin que el computador lo sepa
//setup se ejecuta una vez al principio. 
//La llave { abre setup y muestra todo lo que está adentro
//Las líneas de código siempre van separadas de ;
//camelCase es escribir la primera palabra con minúsucla y la segunda con mayúscula

//Para usar una variable el computador
var diametro;
diametro = 50;
//las funciones también se declaran
//para ejecutar una funcion
nombreFuncion ();
function setup() {
  //canvas (horizontal, vertical)
  createCanvas(1200,620);
  //background (red, green, blue)
  background(200, 0, 60);
  //Para ver donde hay un problema voy a la consola y ver en qué linea está el problema
}
//La funcion draw se ejecuta luego de setup y se ejecuta 60 veces por segundo
//declarar variable anchoBorde
var anchoBorde =10;
//asignarle un valor
anchoBorde = 10;
var diametro;
diametro = 50
function draw() {
    background(200, 0, 60);
    
    quad (mouseX,mouseY,300,120,500,70,45,32,22,60);
    strokeWeight(2);
    fill (255,255,0)
    
  //ellipse (posX, posY, width, height)
  //dibuja una elipse
  //Las medidas son (px, px, px, px)
  //Si pongo mouseX, mouseY en la posición del círculo, el círculo sigue al mouse
  //Antes de hacer la figura defino su forma y borde (strokeWeight)
  //tamaño del borde
  
  triangle (400,800,300,400,600,500)
  diametro = diametro +1;
 
  function estilo1(){

    
  }
}
