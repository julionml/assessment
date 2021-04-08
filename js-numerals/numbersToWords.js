function doConvert() {
    let numberInput = document.querySelector('#numberInput').value;
    let myDiv = document.querySelector('#result');
    let trillion = '';
    let billion='';
    let million='';
    let oneToTwenty = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
        'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (numberInput.toString().length > 9) return myDiv.innerHTML = 'overlimit';
    
    let num = ('000000000' + numberInput).slice(-9).match(/^(\d{1})(\d{1})(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    

    if (numberInput < 0) {
        document.querySelector('#numberInput').value = '';
        return myDiv.innerHTML = 'Please provide a not negative number';
    } else if (numberInput == '') {
        document.querySelector('#numberInput').value = '';
        // return myDiv.innerHTML = 'Please provide a number';
        alert('Please provide a number')
        return
    } else if (!num) {
        document.querySelector('#numberInput').value = '';
        //return myDiv.innerHTML = 'Please provide a number';
        alert('Please provide a number')
        return
    } else if (numberInput == 0) {

        return myDiv.innerHTML = 'zero';
    }

    if(num[1]>1){
        trillion='trillions';
        
    }else{
        trillion='trillion';
    }
    if(num[2]>1){
        billion='billions';
        
    }else{
        billion='billion';
    }
    if(num[3]>1){
        million='millions';
        
    }else{
        million='million';
    }
    let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + `${trillion} ` : '';
    outputText += num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + `${billion} ` : '';
    outputText += num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + `${million} ` : '';

    outputText += num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + 'hundred ' : '';
    outputText += num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]}`) + ' thousand ' : '';
    outputText += num[6] != 0 ? (oneToTwenty[Number(num[6])] || `${tenth[num[6][0]]} ${oneToTwenty[num[6][1]]}`) + 'hundred ' : '';
    outputText += num[7] != 0 ? (oneToTwenty[Number(num[7])] || `${tenth[num[7][0]]} ${oneToTwenty[num[7][1]]} `) : '';

    myDiv.innerHTML = outputText;
}