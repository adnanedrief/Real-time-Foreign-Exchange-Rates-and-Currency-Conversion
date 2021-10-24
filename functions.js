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

function fetchTheDataBySymbole(Symbole) {
    fetch('http://data.fixer.io/api/latest?access_key=8303578bb1d498a693e28e4b1edd7afb&format=1&symbols=MAD')
        .then(response => response.json())
        .then(data => console.log(data)); //data.rates.MAD)
}

function getTheElement(ID) {
    return document.getElementById(ID);
}

function getValueOfCurrentCurrency(ID) {
    let Current_Currency = getTheElement(ID);
    Current_Currency.onkeyup = function() {
        console.log(Current_Currency.value);
    }
    return Current_Currency.value;
}

function getValueOfDesiredCurrency(ID) {
    let Desired_Currency = getTheElement(ID);
    Desired_Currency.onkeyup = function() {
        console.log(Desired_Currency.value);
    }
    return Desired_Currency.value;
}

function getSymboleOfCurrency(ID) {
    let getSymboleOfCurrency = getTheElement(ID);
    return getSymboleOfCurrency.value;
}