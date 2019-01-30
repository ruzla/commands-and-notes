let sqm = prompt('Please Enter Square Meters To Be Converted');
let rollWidth = prompt('Please Enter Width Of Role')

const convertLinear = (num1, num2) => {
    let totalLinear = num1/num2;
    return totalLinear;
}

alert(convertLinear(sqm, rollWidth).toFixed(2));