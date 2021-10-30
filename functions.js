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

function fetchDataAndDoConversion() {

    let current_currency = getSymboleOfCurrency('Current_Currency_selected');
    let desired_currency = getSymboleOfCurrency('Desired_Currency_selected');

    let amountOfCurrency_One = getTheElement('Current_Currency');
    let amountOfCurrency_Two = getTheElement('Desired_Currency');

    let ratePlaceHolder = getTheElement('rates');
    let formula;
    let rateCalculated;

    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=4c7f7efe1bc9f06c4cf0630d7f8e0a33&format=1`")
        .then(response => response.json())
        .then(data => {
            console.log(data); // get all data of all currencies
            rateCalculated = data.rates[desired_currency] / data.rates[current_currency];
            ratePlaceHolder.innerText = `1 ${current_currency} = ${rateCalculated.toFixed(3)} ${desired_currency}`;
            formula = amountOfCurrency_One.value * (rateCalculated);
            amountOfCurrency_Two.value = (formula).toFixed(2);
            // console.log(formula);
        });
}