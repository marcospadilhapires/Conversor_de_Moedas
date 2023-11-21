import * as request from './request.js';
    
var moeda1Seletor, moeda2Seletor;
var moeda1resultado, moeda2resultado
var urlparte1,urlparte2

moeda1resultado = document.querySelector('#moeda-resultado-1');
moeda2resultado = document.querySelector('#moeda-resultado-2');
moeda1Seletor = document.querySelector('#cotacao1')
moeda2Seletor = document.querySelector('#cotacao2')

function obterURLcompleta(moeda,outraMoeda,valorOutroInput,input){
    urlparte1 = request.obterParteURL(moeda.value)
    urlparte2 = request.obterParteURL(outraMoeda)
    if(urlparte1 && urlparte2){
        var url =('https://economia.awesomeapi.com.br/last/'+urlparte1+'-'+urlparte2);
        console.log(url)
        request.getCoinExchangeRate(url,urlparte1,urlparte2, moeda).then((cotacao) => {
             var OutroInput = valorOutroInput
             console.log(OutroInput)
             var teclado = input
             console.log(moeda.id + 'primeiro')
             if( urlparte1 === urlparte2){
                cotacao = 1
             }
            mudarTextoInputs(moeda,cotacao,OutroInput,teclado)
        })
    }
}

function mudarTextoInputs(moeda, cotacao, OutroInput, input) {
    console.log(input);
    OutroInput = request.verificaOutroInput(OutroInput);
    console.log("cotação "+ cotacao)
    const resultadoCotacao = OutroInput / cotacao;

    if (input === 0) {
        if (moeda.id === 'cotacao1') {
            moeda1resultado.value = resultadoCotacao.toFixed(3);
            if (OutroInput === 1) {
                moeda2resultado.value = 1;
            }
        } else {
            moeda2resultado.value = resultadoCotacao.toFixed(3);
            if (OutroInput === 1) {
                moeda1resultado.value = 1;
            }
        }
    } else if (input === 1) {
        console.log(moeda.id);
        if (moeda.id === 'cotacao1') {
            console.log('Você está usando cotacao1');
            moeda2resultado.value = moeda1resultado.value === '' ? '' : (OutroInput * cotacao).toFixed(3);
        } else if (moeda.id === 'cotacao2') {
            console.log('Aqui estamos usando cotacao2');
            moeda1resultado.value = moeda2resultado.value === '' ? '' : (OutroInput * cotacao).toFixed(3);
        }
    }
}


moeda1Seletor.addEventListener('change',function(){
    var moeda = moeda1Seletor
    var outraMoeda = moeda2Seletor.value
    console.log(moeda1resultado.value)
    console.log(moeda2resultado.value)
    var outroValorInput = moeda2resultado.value
    var input = 0
    obterURLcompleta(moeda, outraMoeda, outroValorInput,input)
})
moeda2Seletor.addEventListener('change',function(){
    var moeda = moeda2Seletor
    var outraMoeda = moeda1Seletor.value
    var outroValorInput = moeda1resultado.value
    var input = 0
    obterURLcompleta(moeda, outraMoeda,  outroValorInput,input)
})

moeda1resultado.addEventListener('input',function(){
    var moeda = moeda1Seletor
    var outraMoeda = moeda2Seletor.value
    var outroValorInput = moeda1resultado.value
    var input = 1
    obterURLcompleta(moeda, outraMoeda,  outroValorInput,input)
})

moeda2resultado.addEventListener('input',function(){
    var moeda = moeda2Seletor
    var outraMoeda = moeda1Seletor.value
    var outroValorInput = moeda2resultado.value
    var input = 1
    obterURLcompleta(moeda, outraMoeda,  outroValorInput,input)
})









