function calculate() {
    var powerPrice = Number(document.powerCalculator.powerPrice.value);
    //Use combination of rarity and expansion to determine DEC burn quantity
    var resultObj = {};
    switch(document.powerCalculator.powerRarity.value+""+document.powerCalculator.powerExpansion.value) {
        case "CU":
        case "CD":
        case "CR":
        case "CG":
            resultObj.regular = 10;
            resultObj.golden = 500;
            break;
        case "CAP":
            resultObj.regular = 30;
            resultObj.golden = 1500;
            break;
        case "CB":
            resultObj.regular = 15;
            resultObj.golden = 750;
            break;
        case "CRN":
            resultObj.regular = 5;
            resultObj.golden = 125;
            break;
        case "RU":
        case "RD":
        case "RR":
        case "RG":
            resultObj.regular = 40;
            resultObj.golden = 2000;
            break;
        case "RAP":
            resultObj.regular = 120;
            resultObj.golden = 6000;
            break;
        case "RB":
            resultObj.regular = 60;
            resultObj.golden = 3000;
            break;
        case "RRN":
            resultObj.regular = 20;
            resultObj.golden = 500;
            break;
        case "EU":
        case "ED":
        case "ER":
        case "EG":
            resultObj.regular = 200;
            resultObj.golden = 10000;
            break;
        case "EAP":
            resultObj.regular = 600;
            resultObj.golden = 30000;
            break;
        case "EB":
            resultObj.regular = 300;
            resultObj.golden = 15000;
            break;
        case "ERN":
            resultObj.regular = 100;
            resultObj.golden = 2500;
            break;
        case "LU":
        case "LD":
        case "LR":
        case "LG":
            resultObj.regular = 1000;
            resultObj.golden = 50000;
            break;
        case "LAP":
            resultObj.regular = 3000;
            resultObj.golden = 150000;
            break;
        case "LB":
            resultObj.regular = 1500;
            resultObj.golden = 75000;
            break;
        case "LRN":
            resultObj.regular = 500;
            resultObj.golden = 12500;
            break;
        default:
    }
    var USDPerDEC;
    if(document.powerCalculator.GF.checked){
        USDPerDEC = powerPrice/resultObj.golden;
    } else {
        USDPerDEC = powerPrice/resultObj.regular;
    }
    
    //alert('USD per DEC: $' + USDPerDEC);
    document.getElementById("showResult").innerHTML = USDPerDEC;
}