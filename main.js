const seletor1 = ['USD','EUR','GBP','JPY','AUD','CHF','CAD','CNY','ARS','TRY'];
var moeda1, moeda2;
var moeda1Seletor, moeda2Seletor;
var moeda1Selecao, moeda2Selecao
var urlparte1,urlparte2
var dollarExchangeRate, realValue, userInput;

function obterParteURL(moedaSelecao){
    var urlparte;
    switch(moedaSelecao){
        case 'dolar-americano':
            urlparte = seletor1[0]
            break
        case 'euro':
            urlparte = seletor1[1]
            break
        case 'libra-esterlina':
            urlparte = seletor1[2]
            break
        case 'iene':
            urlparte = seletor1[3]
            break
        case 'dolar-australiano':
            urlparte = seletor1[4]
            break
        case 'franco-suico':
            urlparte = seletor1[5]
            break
        case 'dolar-canadense':
            urlparte = seletor1[6]
            break
        case 'renminbi(Yuan)':
            urlparte = seletor1[7]
            break
        case 'peso-argentino':
            urlparte = seletor1[8]
            break
        case 'lira-turca':
            urlparte = seletor1[9]
            break
        default:
            urlparte = 'Moeda não encontrada'
    }
    console.log(urlparte)
    return urlparte;

}


moeda1resultado = document.querySelector('#moeda-resultado-1');
moeda2resultado = document.querySelector('#moeda-resultado-2');
moeda1Seletor = document.querySelector('#cotacao1')
moeda1Seletor.addEventListener('change',function(){
    moeda1Selecao = moeda1Seletor.value;
    urlparte1 = obterParteURL(moeda1Selecao)
    if(urlparte1 && urlparte2){
        var url =('https://economia.awesomeapi.com.br/last/'+urlparte1+'-'+urlparte2);
        console.log(url)
        getCoinExchageRate(url)
    }
})
moeda2Seletor = document.querySelector('#cotacao2')
moeda2Seletor.addEventListener('change',function(){
    moeda2Selecao = moeda2Seletor.value;
    urlparte2 = obterParteURL(moeda2Selecao)
    if(urlparte1 && urlparte2){
        var url =('https://economia.awesomeapi.com.br/last/'+urlparte1+'-'+urlparte2);
        console.log(url)
        getCoinExchageRate(url)
    }
})

function getCoinExchageRate(url){
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        var cotacoes = [];
        cotacoes[0] = data[urlparte1+urlparte2].low
        //cotacoes[1] = data[urlparte2+urlparte1].low
        moeda1resultado.innerHTML = cotacoes[0];
        //moeda2resultado.innerHTML = cotacoes[1];
    })
    .catch((error) =>{
        console.error('Ocorreu um erro:',error)
    });
}







