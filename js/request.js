const seletor1 = ['USD','EUR','GBP','JPY','AUD','CHF','CAD','CNY','ARS','TRY'];

var moeda1resultado, moeda2resultado
moeda1resultado = document.querySelector('#moeda-resultado-1');
moeda2resultado = document.querySelector('#moeda-resultado-2');
export function obterParteURL(moedaSelecao){
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

 export function verificaOutroInput(outroInput){
    if (outroInput === ''){
        outroInput = 1
    }
    console.log(outroInput)
    return outroInput
}

export function getCoinExchangeRate(url,urlparte1,urlparte2){
    return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        var cotacao;
        cotacao = data[urlparte1+urlparte2].low
        return cotacao;
    })
    .catch((error) =>{
        console.error('Ocorreu um erro:',error)
    });
}

