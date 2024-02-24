var sjcl = require('./sjcl.js');
//var encData = '{"iv":"AaXqu3cWQAnZcCZNznQI9A==","v":1,"iter":1000,"ks":256,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"9lJ1MmwnwyE=","ct":"XYWMvS9rJDj2KZ9mit8VqsN05ztiS1e2HOE7G7NMRsE="}';

//var encData = '{"iv":"Gr5SQOQtJGuk/Fma2IcjrQ==","v":1,"iter":1000,"ks":256,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"lz4WZ0Ndvs8=","ct":"7If5smLqq8+zS1Mj"}';

var encData = '{"iv":"BjCTdk4oqNiIoGw7TI1U4g==","v":1,"iter":1000,"ks":256,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"/Ie4F+4cdjc=","ct":"UcHEXwudyRLzTCD5cPLewQ=="}';

// Define the character set to generate combinations
var characterSet = {
    'a': 'abcdefghijklmnopqrstuvwxyz',
    'A': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	'l': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'n': '0123456789',
	'*': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
};

var mask = "aAn"; // Example mask
var minLength = mask.length;
var maxLength = mask.length;

console.log("Here we go!");

generateCombinations("karel", 0);

function generateCombinations(currentCombination, maskIndex) {
    if (maskIndex === mask.length) {
        try {
            var decryptedData = sjcl.decrypt(currentCombination, encData);
            console.log("Password found!");
            console.log("Password: " + currentCombination);
            console.log("Text: " + decryptedData);
            process.exit(); // Terminate the script after finding the password
        } catch (error) {
            process.stdout.write("Trying: " + currentCombination + '\r');
        }
        return;
    }

    var currentMaskChar = mask[maskIndex];
    var currentCharacterSet = characterSet[currentMaskChar];

    for (var i = 0; i < currentCharacterSet.length; i++) {
        generateCombinations(currentCombination + currentCharacterSet[i], maskIndex + 1);
    }
}