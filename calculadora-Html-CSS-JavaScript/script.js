function agregar(valor){
    document.getElementById('calculo').value += valor;
}

function borrar(){
    var calculo = document.getElementById('calculo');
    calculo.value = calculo.value.slice(0, -1);
}

function borrarTodo(){
    document.getElementById('calculo').value = '';
}

function calcular() {
    var calculo = document.getElementById('calculo');
    try {
        calculo.value = eval(calculo.value);
    } catch (error) {
        calculo.value = 'Error';
    }
}

