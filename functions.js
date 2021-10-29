function currentDateOfCheck() {
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let FullDate = date + "/" + month + "/" + year;
    return FullDate;
}

function currentTimeOfCheck() {
    let ts = Date.now();
    let date_ob = new Date(ts);
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let FullTime = `${hours}:${minutes}:${seconds}`;
    return FullTime;
}

function getTheElement(ID) {
    return document.getElementById(ID);
}

function getSymboleOfCurrency(ID) {
    return getTheElement(ID).value;
}

function fetchTheDataBySymboleAndDoConversion(currencyOne, currencyTwo) {
    let rateValue;
    let formula;
    let Current_Currency = getSymboleOfCurrency(currencyOne);
    let Desired_Currency = getSymboleOfCurrency(currencyTwo);
    let amountOfCurrentCurrency = getTheElement('Current_Currency');

    fetch(`http://data.fixer.io/api/latest?access_key=c2ed7ca26698d1bdf75ae71a4ee1dd8f&format=1&symbols=${Current_Currency}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // log the json() result
            switch (Current_Currency) {
                case 'EUR':
                    rateValue = data.rates.EUR;
                    break;
                case 'USD':
                    rateValue = data.rates.USD;
                    break;
                case 'MAD':
                    rateValue = data.rates.MAD;
                    break;
            }
            formula = (amountOfCurrentCurrency.value * rateValue);
            formula = formula.toFixed(3); //Formatting a number with exactly tree decimals
            console.log('formula : ' + formula);
            getTheElement('Desired_Currency').value = formula;

            console.log('function.js : ' + rateValue);
            getTheElement('rates').innerHTML = `1 ${Current_Currency} = ${rateValue} ${Desired_Currency} `;
            // console.log(getValueOfDesiredCurrency(currencyOne));
        });
}