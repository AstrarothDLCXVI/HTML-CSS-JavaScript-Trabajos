let iconos;
let array = [];

tablero();

/*Aqui solo tenemos las imagenes */
function MostrarIconos() {
    
    iconos = [
        `<img src="imagenes/team.png">`,
        `<img src="imagenes/sirius.jpg">`,
        `<img src="imagenes/voldemort.png">`,
        `<img src="imagenes/snape.jpg">`,
        `<img src="imagenes/gemelos.png">`,
        `<img src="imagenes/bellatrix.webp">`


    ];
}


/*Esta funcion nos crea el tablero de juego y nos posiciona las cartas de forma ramdon */
function tablero() {
    /*Aqui llamamos al las imagenes */
    MostrarIconos();

    let escenario = document.getElementById("tablero");

    let cartas = [];

    /*Aqui le decimos que las cartas se creen 2 veces en el tablero */
    let contador = iconos.length * 2; 

    /*Este bucle nos crea las cartas tanto por delante como por detras, tantas veces como cartas hay */
    for(let i = 0; i < contador; i++){
        cartas.push(
        `<div class="areaCarta" onclick="rotacionCarta(${i})">
              <div class="carta" id="carta${i}">
                  <div class="cara rotacion" id="back${i}">
                  ${iconos[0]}
                  </div>
                  <div class="cara back"><img src=""></div>
              </div>
          </div>`
        );
            
        if(i % 2 == 1){
            iconos.splice(0, 1);
        }
    }
    /*Esto nos posiciona las cartas en sitios ramdons */
    cartas.sort(() => Math.random() - 0.5);
    escenario.innerHTML = cartas.join("");
}


/*Esta funcion se encarga de hacer que la carta de la vuelta*/
function rotacionCarta(i) {
    /*Con esta variable llamamos a nuestras cartas */
    let cartaR = document.getElementById("carta" + i);

    if(cartaR.style.transform != "rotateY(180deg)"){

        cartaR.style.transform = "rotateY(180deg)";
        array.push(i);
    }

    if(array.length == 2){
        igualarCarta(array);
        array = [];
    }


}


/*Esta funcion trada de decir si la carta es igual o es distinta, si es igual las deja boca arriba y si es distinta la vuelve boca abajo*/
function igualarCarta(array) {
    setTimeout(() => {
        /*Estas variables son las cartas que hemos levantado*/
        let back1 = document.getElementById("back" + array[0]);
        let back2 = document.getElementById("back" + array[1]);

        /*Aqui mira si son distinta*/
        if(back1.innerHTML != back2.innerHTML){
            /*Si son distinta las vuelve a poner boca abajo, para ello tenemos estas 2 variables, que llaman a nuestras cartas*/
            let c1 = document.getElementById("carta" + array[0]);
            let c2 = document.getElementById("carta" + array[1]);

            c1.style.transform = "rotateY(0deg)";
            c2.style.transform = "rotateY(0deg)";
        }else {
            /*En caso de que sean igual las deja boca arriba */
            back1.style.opacity = 0.4;
            back2.style.opacity = 0.4;
        }

    }, 1000);
    
}

