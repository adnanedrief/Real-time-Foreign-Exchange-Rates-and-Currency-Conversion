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
    let hours = ('0' + date_ob.getHours()).slice(-2);
    let minutes = ('0' + date_ob.getMinutes()).slice(-2);
    let seconds = ('0' + date_ob.getSeconds()).slice(-2);
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
    let FXRate;
    fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=4c7f7efe1bc9f06c4cf0630d7f8e0a33&format=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // get all date of all currencies
            rateValue = data.rates[Current_Currency];
            console.log('rateValue ' + rateValue);

            console.log(data.rates[Current_Currency]); // log the json() result

            FXRate = data.rates[Current_Currency] / data.rates[Desired_Currency];
            console.log('FXRate : ' + FXRate);
            // actually calculate the new amount
            formula = amountOfCurrentCurrency.value * FXRate;

            // formula = (amountOfCurrentCurrency.value * rateValue);
            formula = formula.toFixed(3); //Formatting a number with exactly tree decimals
            console.log('formula : ' + formula);
            getTheElement('Desired_Currency').value = formula;

            getTheElement('rates').innerHTML = `1 ${Current_Currency} = ${rateValue} ${Desired_Currency} `;
            console.log('function.js : ' + rateValue);
        });
}