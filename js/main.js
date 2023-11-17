import * as request from './request.js';
    
var moeda1Seletor, moeda2Seletor;
var moeda1Selecao, moeda2Selecao
var moeda1resultado, moeda2resultado
var urlparte1,urlparte2

moeda1resultado = document.querySelector('#moeda-resultado-1');
moeda2resultado = document.querySelector('#moeda-resultado-2');
moeda1Seletor = document.querySelector('#cotacao1')
moeda2Seletor = document.querySelector('#cotacao2')

function obterURLcompleta(moeda,outraMoeda,valorInput,valorOutroInput){
    urlparte1 = request.obterParteURL(moeda.value)
    urlparte2 = request.obterParteURL(outraMoeda)
    if(urlparte1 && urlparte2){
        var url =('https://economia.awesomeapi.com.br/last/'+urlparte1+'-'+urlparte2);
        console.log(url)
        console.log(moeda)
        request.getCoinExchangeRate(url,urlparte1,urlparte2, moeda).then((cotacao) => {
            mudarTextoInputs(moeda,cotacao)
        })
    }
}

function mudarTextoInputs(moeda,cotacao){
    if (moeda.id = 'cotacao1'){
        moeda1resultado.value = cotacao * moeda2resultado.value
    }
    else
    {
        moeda2resultado.value = cotacao * moeda1resultado.value
    }
}


moeda1Seletor.addEventListener('change',function(){
    var moeda = moeda1Seletor
    var outraMoeda = moeda2Seletor.value
    console.log(moeda1resultado.value)
    var valorInput = moeda1resultado.value
    console.log(moeda2resultado.value)
    var outroValorInput = moeda2resultado.value
    obterURLcompleta(moeda, outraMoeda, valorInput, outroValorInput)
})
moeda2Seletor.addEventListener('change',function(){
    var moeda = moeda2Seletor
    var outraMoeda = moeda1Seletor.value
    var valorInput = moeda2resultado.value
    var outroValorInput = moeda1resultado.value
    obterURLcompleta(moeda, outraMoeda, valorInput, outroValorInput)
})











