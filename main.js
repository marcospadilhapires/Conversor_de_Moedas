var url ='https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial=%2711-04-2023%27&@dataFinalCotacao=%2711-14-2023%27&$top=1&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,dataHoraCotacao';

var dollarExchangeRate, realValue, userInput;


function getDollarExchageRate(){
    var dollarExchangeRate
    return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        return data.value[0].cotacaoCompra;
    })
    .catch((error) =>{
        console.error('Ocorreu um erro:',error)
        throw error;
    });

}

getDollarExchageRate()
.then((dollarExchangeRate) => {
    userInput = 30;
    realValue = dollarExchangeRate * userInput;
    alert('O valor $'+userInput+' é igual a R$'+ realValue.toFixed(2))
})
.catch((error) =>{
    console.error('Erro ao obter a taxa de cambio:',error)
});





