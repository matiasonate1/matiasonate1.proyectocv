
//funcion volver arriba
const btn_scrolltop = document.getElementById("btn_scrolltop")
  btn_scrolltop.addEventListener('click',()=>{
     window.scrollTo({top:0, behavior:"smooth"})})

//funcion desaparecer y aparecer icono flecha
window.onscroll=()=>{
    if(window.scrollY<200){
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else{
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
}

//funciones de desplazamiento barra de navegacion
const sobremi = document.getElementById("sobre-mi")
     sobremi.addEventListener('click',()=>{
     window.scrollTo({top:60, behavior:"smooth"})})
    

const estudios = document.getElementById("misestudios")
  estudios.addEventListener('click',()=>{
     window.scrollTo({top:750, behavior:"smooth"})})

const experiencia = document.getElementById("miexp")
  experiencia.addEventListener('click',()=>{
     window.scrollTo({top:380, behavior:"smooth"})})


const habilidades = document.getElementById("mishabilidades")
    habilidades.addEventListener('click',()=>{
    window.scrollTo({top:950, behavior:"smooth"})})
   
const idiomas = document.getElementById("misidiomas")
    idiomas.addEventListener('click',()=>{
    window.scrollTo({top:1200, behavior:"smooth"})})
   
const informacion = document.getElementById("mi-info")
    informacion.addEventListener('click',()=>{
    window.scrollTo({top:1500, behavior:"smooth"})})
   
    