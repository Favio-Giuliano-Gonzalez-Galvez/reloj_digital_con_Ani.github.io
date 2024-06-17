function reloj(){
    horas_h = document.getElementById('horas')
    minutos_h = document.getElementById('minutos')
    segundos_h = document.getElementById('segundos')
    horas_h.textContent = 1

    myDate = new Date();
    horas = myDate.getHours();
    minutos = myDate.getMinutes();
    segundos = myDate.getSeconds();

    setInterval(function(){

        segundos++
        segundos_h.textContent = segundos
        if (segundos == 59) {
            segundos = -1
            minutos++
            minutos_h.textContent = minutos
        }

        if (minutos==59){
            minutos= -1
            horas++
            horas_h.textContent = horas
        }

        if(horas==24){
            horas=0
            horas_h.textContent = horas
        }
        
    }, 1000);



    horas_h.textContent = horas
    minutos_h.textContent = minutos
    segundos_h.textContent = segundos

}

function mostrar_text(){
    let boton = document.getElementById('boton')
    boton.addEventListener('click', function(){
        let texto = document.getElementById('texto')
        texto.style.display = 'block'
    })
}


reloj()
mostrar_text()
