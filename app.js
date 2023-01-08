const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum };

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
module.exports = { sum, fromEuroToDollar }


const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar/1.2)*127;
    return valueInYen
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen}


const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen/127.9)*0.8;
    return valueInPound
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}

