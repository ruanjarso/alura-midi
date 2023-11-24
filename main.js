function tocaSom(idElementoAudio) {   
    const elemento = document.querySelector(idElementoAudio);
    
    if(elemento != null  && elemento.localName === 'audio'){
        elemento.play();
    } else{
        console.log("Elemento não encontrado ou seletor inválido!")
    }  
}

//document.querySelector(".tecla_pom").onclick = tocaSom;

/*
let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template String

    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador);
}
*/

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if(evento.code === "Space" || evento.code === "Enter"){
            tecla.classList.add('ativa');
        }

        //console.log(evento);
        
    }

    tecla.onkeyup   = function () {
        tecla.classList.remove('ativa');        
    }

}

