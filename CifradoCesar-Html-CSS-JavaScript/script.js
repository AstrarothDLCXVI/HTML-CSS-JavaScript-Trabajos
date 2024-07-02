let base = document.getElementById("base");
let texto = document.getElementById("texto");
let textoMostrado = document.getElementById("textoMostrado");

let abecedario = "abcdefghijklmnopqrstuvwxyz";


function cifrar() {
    
    textoMostrado.innerText = '';

    let transformar = abecedario.slice(base.value, abecedario.length) + abecedario.slice(0, base.value);

    for(let i = 0; i<texto.value.length; i++){

        if (texto.value[i] === ' ') { 
            //Con esto evitamos que nos salga el default, ya que le decimos que hay un espacio en ese luegar
           textoMostrado.innerText += ' '; 
        } else {
            let indice = abecedario.indexOf(texto.value[i]);
            textoMostrado.innerText += transformar[indice];
        }
    }
    
}