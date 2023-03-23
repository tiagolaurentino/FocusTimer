
const Play = document.querySelector('.play')
const Stop = document.querySelector('.stop')

const minute = document.querySelector('.minutos')
const second = document.querySelector('.segundos')

const botaoAumentar = document.querySelector('.mais')
const botaoDiminuir = document.querySelector('.menos')

const lareira = document.querySelector('.figura04')
const audio = document.querySelector('.lareira')

const cafeteria = document.querySelector('.figura03')
const audio03 = document.querySelector('.cafe')

const chuva = document.querySelector('.figura02')
const audio02 = document.querySelector('.chuva')

const floresta = document.querySelector('.figura01')
const audio01 = document.querySelector('.floresta')

let pararCronometro
let minutes
let diminui



function cronometroGeral() {
    pararCronometro = setTimeout(function(){
         minutes = Number(minute.innerHTML)
         let seconds = Number(second.innerHTML)
         diminui = Number(minutes.innerHTML - 5)
        
       if(seconds <= 0) {
           seconds = 3

           minute.innerHTML = String(minutes - 1 ).padStart(2,'0')

       }

        if(minutes <= 0){
           return
        }
        second.innerHTML = String(seconds - 1).padStart(2,'0')
         
        cronometroGeral()
       },1000)
}

function aumentar() {
    minutes += 5
    minute.innerHTML = minutes;
    
}

function diminuir() {
    minutes -= 5
    minute.innerHTML = minutes;
   
}
 function desligar() {

 }


Play.addEventListener('click', function() {
 cronometroGeral()
})

Stop.addEventListener('click', function() {
   clearInterval(pararCronometro)
} )

botaoAumentar.addEventListener('click', function(){
    aumentar()
})

botaoDiminuir.addEventListener('click', function() {
    diminuir()
})

lareira.addEventListener('click', function() {

    audio01.pause()
    audio02.pause()
    audio03.pause()
    audio.play()
    
})

cafeteria.addEventListener('click', function(){
    audio01.pause()
    audio02.pause()
    audio.pause()
    audio03.play()
})

chuva.addEventListener('click', function() {
    audio01.pause()
    audio.pause()
    audio03.pause()
    audio02.play()
})

floresta.addEventListener('click', function( ){
    audio02.pause()
    audio.pause()
    audio03.pause()
    audio01.play()
})

/*setTimeout(function(){
    let seconds = Number(BTNseconds.textContent)
    
    if(seconds <= 0) {
        senconds = 10
    }
    seconds.textContent = -1

   }, 1000)*/