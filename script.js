const title = document.querySelector("#title");
const numeroOne= document.querySelector("#numeroUno");
const numeroDos= document.querySelector("#numeroDos");
const botonSumar= document.querySelector("#btnSumar");
const botonRestar= document.querySelector("#btnRestar");
const botonMultiplicar= document.querySelector("#btnMultiplicar");
const botonDividir= document.querySelector("#btnDividir");
const resultadoInput= document.querySelector("#resultado")
const campoObligatorioUno= document.querySelector("#CampoObligatorioUno")
const campoObligatorioDos= document.querySelector("#CampoObligatorioDos")
const botonLimpiar= document.querySelector("#btnDividir");


botonSumar.addEventListener("click", ()=>{
  if(numeroOne.value==""){
    numeroOne.style.borderColor="red"
    campoObligatorioUno.textContent="*Campo obligatorio"
  }else if(numeroDos.value==""){
    numeroDos.style.borderColor="red"
    campoObligatorioDos.textContent="*Campo obligatorio"}
  else{
  const resultadoSuma= Number(numeroOne.value) + Number(numeroDos.value)
  resultadoInput.value=resultadoSuma;
  campoObligatorioUno.textContent=""
  campoObligatorioDos.textContent=""
  numeroOne.style.borderColor="black"
  numeroDos.style.borderColor="black"

  }
})

botonRestar.addEventListener("click", ()=>{
  if(numeroOne.value==""){
    campoObligatorioUno.textContent="*Campo obligatorio"
    numeroOne.style.borderColor="red"
  }else if(numeroDos.value==""){
    numeroDos.style.borderColor="red"
    campoObligatorioDos.textContent="*Campo obligatorio"}
  else{
  const resultadoResta= Number(numeroOne.value) - Number(numeroDos.value)
  resultadoInput.value=resultadoResta;
  campoObligatorioUno.textContent=""
  campoObligatorioDos.textContent=""
  numeroOne.style.borderColor="black"
  numeroDos.style.borderColor="black"
  }
})

botonMultiplicar.addEventListener("click", ()=>{
  if(numeroOne.value==""){
    numeroOne.style.borderColor="red"
    campoObligatorioUno.textContent="*Campo obligatorio"
  }else if(numeroDos.value==""){
    numeroDos.style.borderColor="red"
    campoObligatorioDos.textContent="*Campo obligatorio"}
  else{
  const resultadoMultiplicacion= Number(numeroOne.value) * Number(numeroDos.value)
  resultadoInput.value=resultadoMultiplicacion;
  campoObligatorioUno.textContent=""
  campoObligatorioDos.textContent=""
  numeroOne.style.borderColor="black"
  numeroDos.style.borderColor="black"
  }
})

botonDividir.addEventListener("click", ()=>{
  if(numeroOne.value==""){
    numeroOne.style.borderColor="red"
    campoObligatorioUno.textContent="*Campo obligatorio"
  }else if(numeroDos.value==""){
    numeroDos.style.borderColor="red"
    campoObligatorioDos.textContent="*Campo obligatorio"}
  else{
  const resultadoDivision= Number(numeroOne.value) / Number(numeroDos.value)
  resultadoInput.value=resultadoDivision;
  campoObligatorioUno.textContent=""
  campoObligatorioDos.textContent=""
  numeroOne.style.borderColor="black"
  numeroDos.style.borderColor="black"
  }
})








