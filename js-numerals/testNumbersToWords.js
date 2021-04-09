

function testConvert() {
    alert('open the console to see the results(Press F12)')

    if (doConvert(7) == 'seven ') {
        console.log('Input: 7. result:', doConvert(7), 'It Works!');
    }

    else {
        console.log('Input: 7, result:', doConvert(7), 'Test failed');
    }

    if (doConvert(42) == 'forty two  ') {
        console.log('Input: 42. result:', doConvert(42), 'It Works!');
    }

    else {
        console.log('Input: 42, result:', doConvert(42), 'Test failed');
    }

    if (doConvert(2001) == 'two  thousand one ') {
        console.log('Input: 2001. result:', doConvert(2001), 'It Works!');
    }

    else {
        console.log('Input: 2001, result:', doConvert(2001), 'Test failed');
    }

    if (doConvert(1999) == 'one  thousand nine hundred ninety nine  ') {
        console.log('Input: 1999. result:', doConvert(1999), 'It Works!');
    }

    else {
        console.log('Input: 1999, result:', doConvert(1999), 'Test failed');
    }

    if (doConvert(17999) == 'seventeen  thousand nine hundred ninety nine  ') {
        console.log('Input: 17999. result:', doConvert(17999), 'It Works!');
    }

    else {
        console.log('Input: 17999, result:', doConvert(17999), 'Test failed');
    }

}