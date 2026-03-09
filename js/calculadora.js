const screen = document.querySelector('.screen');
let buttons=[];
for (let y=0;y<=9;y++){
    buttons[y] =document.getElementById(`btn-${y}`);
}
const buttonmas=document.getElementById('btnmas');
const buttonmenos=document.getElementById('btnmenos');
const buttonmulti=document.getElementById('btnmulti');
const buttondiv=document.getElementById('btndiv');
const buttonigual=document.getElementById('btnigual');
const buttonC=document.getElementById('btn-C');
const buttonpunto=document.getElementById('btnpunto')
let operadores=[buttonmas,buttonmenos,buttonmulti,buttondiv];
let historial=[];
let primerValor=0;
let segundoValor=0;
let operadorActual; 
let valorFinal;
for (let x=1;x<=9;x++){
    const boton = document.getElementById(`btn-${x}`);
    boton.onclick = () => {
        screen.value+=x;
        guardarHistorial(x);
    };
}
buttonpunto.onclick= () =>{
    screen.value+=".";
    guardarHistorial(".");
};
buttonC.onclick = () => { 
    screen.value="";
    reset();  
};
operadores.forEach(op => {
    op.addEventListener("click",() => {
                guardarPrimerOperador();
                vaciarHistorial();
                screen.value="";
                operadorActual=op.value;
        });
    });

buttonigual.addEventListener("click",() =>{
    guardarSegundoOperador();
    switch(operadorActual){
        case"+": screen.value=primerValor+segundoValor;
        break;
        case"-": screen.value=primerValor-segundoValor;
        break;
        case"*": screen.value=primerValor*segundoValor;
        break;
        case"/": screen.value=primerValor/segundoValor;
        break;
    }
    vaciarHistorial();
});


function guardarHistorial(numerito){
    historial.push(numerito);
}
function vaciarHistorial(){
    historial=[];
}
function guardarPrimerOperador(){
    primerValor=Number(historial.join(""));
}
function guardarSegundoOperador(){
    segundoValor=Number(historial.join(""));
}
function reset(){
    primerValor=0;
    segundoValor=0;
    vaciarHistorial();
}
