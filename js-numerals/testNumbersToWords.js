

function testConvert() {
    let testResult = document.querySelector('#testResult');
    if (doConvert(7).trim() == 'seven')
        console.log('It Works!');
    else
        console.log('Test failed');

    if (doConvert(42) == 'forty two  ')
        console.log('It Works!');
    else
        console.log('Test failed');

        if (doConvert(2001) == 'two  thousand one ')
        console.log('It Works!');
    else
        console.log('Test failed');

        if (doConvert(1999) == 'one  thousand nine hundred ninety nine  '){
            testResult.innerHTML += doConvert(17999)+' 17999'
            console.log('It Works!');
        }
        
    else
        console.log('Test failed');
        
        if (doConvert(17999) == 'seventeen  thousand nine hundred ninety nine  '){
            console.log('It Works!');
            testResult.innerHTML = doConvert(17999)
        }
        
    else
        console.log('Test failed');
       
}