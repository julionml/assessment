

//to do the unit test in a different file
//self.doConvert = doConvert
//
function convert() {
    let myDiv = document.querySelector('#result');
    let numberInput = document.querySelector('#numberInput').value;
    let numberToCovert = 0;
    if (numberInput < 0) {
        document.querySelector('#numberInput').value = '';
        alert('Please provide a not negative number')
        return
    }

    if (numberInput === '') {
        alert('Please provide a number')
        myDiv.innerHTML = ''
        return;
    } else {
        numberToCovert = Number(numberInput);
        myDiv.innerHTML = this.doConvert(numberToCovert)

    }




}


function doConvert(number) {

    let myDiv = document.querySelector('#result');
    let outputText = '';
    let trillion = '';
    let billion = '';
    let million = '';
    const array1to20 = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
        'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const array20to100 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number.toString().length > 9) return myDiv.innerHTML = 'overlimit';

    let num = ('000000000' + number).slice(-9).match(/^(\d{1})(\d{1})(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);


     if (number === '') {
        document.querySelector('#numberInput').value = '';

        alert('Please provide a number')
        return
    } else if (!num) {
        document.querySelector('#numberInput').value = '';

        alert('Please provide a number')
        return
    } else if (number === 0) {

        return myDiv.innerHTML = 'zero';
    }

    if (num[1] > 1) {
        trillion = 'trillions';

    } else {
        trillion = 'trillion';
    }

    if (num[2] > 1) {
        billion = 'billions';

    } else {
        billion = 'billion';
    }

    if (num[3] > 1) {
        million = 'millions';

    } else {
        million = 'million';
    }
    if (num[1] != 0) {
        outputText = (array1to20[Number(num[1])] || `${array20to100[num[1][0]]} ${array1to20[num[1][1]]}`) + `${trillion} `
    }
    if (num[2] != 0) {
        outputText += (array1to20[Number(num[2])] || `${array20to100[num[2][0]]} ${array1to20[num[2][1]]}`) + `${billion} `
    }
    if (num[3] != 0) {
        outputText += (array1to20[Number(num[3])] || `${array20to100[num[3][0]]} ${array1to20[num[3][1]]}`) + `${million} `
    }
    if (num[4] != 0) {
        outputText += (array1to20[Number(num[4])] || `${array20to100[num[4][0]]} ${array1to20[num[4][1]]}`) + 'hundred '
    }
    if (num[5] != 0) {
        outputText += (array1to20[Number(num[5])] || `${array20to100[num[5][0]]} ${array1to20[num[5][1]]}`) + ' thousand '
    }
    if (num[6] != 0) {
        outputText += (array1to20[Number(num[6])] || `${array20to100[num[6][0]]} ${array1to20[num[6][1]]}`) + 'hundred '
    }
    if (num[7] != 0) {

        outputText += (array1to20[Number(num[7])] || `${array20to100[num[7][0]]} ${array1to20[num[7][1]]} `)



    }
outputText=outputText.trimEnd()

    return outputText;
}
module.exports= doConvert

