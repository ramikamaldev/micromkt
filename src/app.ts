import * as request from "request";
import { Big } from "big.js"
import { printTable } from "console-table-printer"
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv;

/**
 * This function sets the duration to run the requests for, and the interval by which to make the request.
 */
function setDurationAndIntervalRequest() {
    let duration = argv["duration"] * 1000;
    let interval = argv["interval"] * 1000;
    //intervals
    let myInterval = setInterval(getBitcoinPricesRequest, interval)
    let clearIntervals = function () { clearInterval(myInterval) }
    //duration
    setTimeout(clearIntervals, duration)
}


/**
 * This function makes the bitcoin price request and pretty prints the results to a table.
 */
function getBitcoinPricesRequest() {
    request.get('https://api.coindesk.com/v1/bpi/currentprice.json', function (error, response, body) {
        if (error) {
            console.error('error:', error); // Print the error if one occurred
        }
        else {
            let bodyJSONResponse = JSON.parse(body);
            let usdJSON = bodyJSONResponse["bpi"]["USD"];
            let eurJSON = bodyJSONResponse["bpi"]["EUR"];
            let gbpJSON = bodyJSONResponse["bpi"]["GBP"];
            let testCases = [
                { currency: "USD", value: `$${new Big(usdJSON["rate_float"]).toFixed(2)}` },
                { currency: "EUR", value: `€${new Big(eurJSON["rate_float"]).toFixed(2)}` },
                { currency: "GBP", value: `£${new Big(gbpJSON["rate_float"]).toFixed(2)}` }
            ];
            printTable(testCases)
        }

    });
}

setDurationAndIntervalRequest();