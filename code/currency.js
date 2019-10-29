// See ../README.md for the details of this assignment
// Look for constants that are going to be referenced later in Tony's app.js.
// Create either an array/object of objects to reference later
const exchangeRates = { 
	CadToUsd : 1.5,
	UsdToCad : 0.5
};
//  Export CadToUsd function (of multiplying his amount of 50 by the exchange rate) using the path Tony forces us to take from his app.js. 
exports.CadToUsd = function(amount) {
return amount * Number(exchangeRates.CadToUsd);
};
//  Export CadToUsd function (of multiplying Tony's amount of 50 by the exchange rate) using the path Tony forces us to take from his app.js. 
exports.UsdToCad = function(amount) { 
return amount * Number(exchangeRates.UsdToCad);
};
//  Export setRate function of using an if statement to force the exchange rate to change Tony's constant of 5 from Tony's app.js.
exports.setRate = function(rateName, rateValue) {
if (exchangeRates[rateName]) {
	exchangeRates[rateName] = rateValue;
	return true;
} else {
	return false;
}}
//  Export getRate function of using an if statement to change the two currencies from Tony's app.js.
exports.getRate = function(rateName){
if (exchangeRates[rateName]){
	return exchangeRates[rateName];
} else {
	return false;
}}

