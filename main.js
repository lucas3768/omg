//Armazenar as coordenadas
var x = 0;
var y = 0;

//Armazenar a forma escolhida
var drawShape="";

//Acionar a API para converter voz em texto
var reconhecerFala = window.webkitSpeechRecognition;

//Usando o modelo para criar uma nova API de fala
var reconhecer = new reconhecerFala();

//funções P5
function preload() {


}
function setup() {
canvas = createCanvas(900,600)
}
function draw() {
if (drawShape == "circle") {
    rayo = Math.floor(Math.random()*100)
    circle(x,y,rayo)
    document.getElementById("status").innerHTML = "circulo desenhado"
    drawShape= ""
    
}
if (drawShape == "square") {
    
    rect(x,y,150,150)
    document.getElementById("status").innerHTML = "quadrado desenhado"
    drawShape= ""
}
}
function start() {
    document.getElementById("status").innerHTML = "fale circulo ou quadrado"
reconhecer.start()
} 
reconhecer.onresult = function(event) {
Resultado = event.results[0][0].transcript
document.getElementById("status").innerHTML="o comando reconhecido foi"+ Resultado
x= Math.random()*900 
y= Math.random()*600
if (Resultado == "círculo") {
    drawShape = "circle"
    
}
if (Resultado == "quadrado") {
    drawShape = "square"
    
}
}