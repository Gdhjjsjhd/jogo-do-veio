const cartelaDiv = document.getElementById('cartela');
const numeroSorteadosDiv = document.getElementById('numerosSorteados');

let numerosSorteados = [];
const totalNumeors = 75;

document.getElementById('renderizar').addEventListener('click', confirmarrederizacao);

document.getElementById('sortear').addEventListener('click', sortearNumero);

function renderizarcartela(){
    cartelaDiv.innerHTML = '';
    const cartela = [];
    while (cartela.length < 25){
        const numero = Math.floor(Math.random() * totalNumeors) + 1
        if(!cartela.includes(numero)){
            cartela.push(numero);
        }
    }
    cartela.sort((a, b) => a - b);

    cartela.forEach(numero => {
        const div = document.createElement('div')
        div.className = 'numero';
        div.textContent = numero

        div.addEventListener('click', () => {
            div.classList.toggle('clicado');
        })


        cartelaDiv.appendChild(div);
    })
}


function sortearNumero(){
    let numeroSorteado;

    do{
        numeroSorteado = Math.floor(Math.random() * totalNumeors) + 1
    }while (numerosSorteados.includes(numeroSorteado));

    numerosSorteados.push(numeroSorteado);


    const span = document.createElement('span');
    span.className = 'numero-sorteado';
    span.textContent = numeroSorteado;

    numeroSorteadosDiv.appendChild(span)

    
}


function confirmarrederizacao(){
    const confirmar = confirm('Você tem certeza que deseja rederinzar uma nova cartela?');
    if(confirmar){
        renderizarcartela();
    }
}