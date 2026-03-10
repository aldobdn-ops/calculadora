const screen = document.querySelector('.screen');
let buttons=[];
for (let y=0;y<=9;y++){
    buttons[y] =document.getElementById(`btn-${y}`);
}
const teleport=new Audio("media/teleport.mp3");
const kamekameha=new Audio("media/kamekameha.mp3")
const buttonmas=document.getElementById('btnmas');
const buttonmenos=document.getElementById('btnmenos');
const buttonmulti=document.getElementById('btnmulti');
const buttondiv=document.getElementById('btndiv');
const buttonigual=document.getElementById('btnigual');
const buttonC=document.getElementById('btn-C');
const buttonpunto=document.getElementById('btnpunto')
let operadores=[buttonmas,buttonmenos,buttonmulti,buttondiv];
let historial=[];
let primerValor=null;
let segundoValor=null;
let operadorActual; 
let valorFinal;
let resultadoMostrado=false;
for (let x=0;x<=9;x++){ 
    const boton = document.getElementById(`btn-${x}`);
    boton.onclick = () => {
        teleport.currentTime = 0;
        teleport.play();

        if (resultadoMostrado) {
            screen.value = "";
            vaciarHistorial();
            resultadoMostrado = false;
        }
        screen.value += x;
        guardarHistorial(x);

    };
}
buttonpunto.onclick= () =>{
    screen.value+=".";
    guardarHistorial(".");
};
buttonC.onclick = () => { 
    screen.value="";
    resetTotal();  
};
operadores.forEach(op => {
    op.addEventListener("click",() => {
      if(primerValor === null || primerValor === undefined){
        guardarPrimerOperador();
        vaciarHistorial();
        screen.value="";
        operadorActual=op.value;
      }
      else{
        
        if(historial.length===0){
            operadorActual=op.value;
            return;
        }
        guardarSegundoOperador();
        primerValor = Number(primerValor);
        segundoValor = Number(segundoValor);

        switch(operadorActual){
            case"+": screen.value=primerValor+segundoValor;
                    primerValor=primerValor+segundoValor;
            break;
            case"-": screen.value=primerValor-segundoValor;
                    primerValor=primerValor-segundoValor;
            break;
            case"*": screen.value=primerValor*segundoValor;
                    primerValor=primerValor*segundoValor;
            break;
            case"/": screen.value=primerValor/segundoValor;
                    primerValor=primerValor/segundoValor;
            break;
        }
        resultadoMostrado=true;
        
        vaciarHistorial();
        }
    });
});
buttonigual.addEventListener("click",() =>{
    kamekameha.currentTime = 0;
    kamekameha.play();
    guardarSegundoOperador();
    primerValor = Number(primerValor);
    segundoValor = Number(segundoValor);

    switch(operadorActual){
        case"+": screen.value=primerValor+segundoValor;
                 primerValor=primerValor+segundoValor;
        break;
        case"-": screen.value=primerValor-segundoValor;
                primerValor=primerValor-segundoValor;
        break;
        case"*": screen.value=primerValor*segundoValor;
                primerValor=primerValor*segundoValor;
        break;
        case"/": screen.value=primerValor/segundoValor;
                primerValor=primerValor/segundoValor;
        break;
    }
    resultadoMostrado=true;
    vaciarHistorial();
    reset();
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
    segundoValor=null;
    vaciarHistorial();
    valorFinal=null;
}
function resetTotal(){
    primerValor=null;
    segundoValor=null;
    valorFinal=null;
    resultadoMostrado=false;
    vaciarHistorial();
}
