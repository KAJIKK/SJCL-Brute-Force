var sjcl = require('./sjcl.js')
var encData = '{"iv":"UHbGpR7R8Dbw2WbwucGvFg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"MQZ6b1wJ6/8=","ct":"bZBtJJoNtMmQNM34QOmEz5o3yjshIFZMu1Sd9XRyXXWPwR95Q9pGxi47lY9woXSoh31LbfUf"}'
console.log("Here we go!")
for (i=0;i<100;i++) {
	var j = i.toString(10)
	try{
		var v1 = sjcl.decrypt(j, encData)
		console.log("Password found!                  ")
		console.log("Password: " + j)
		console.log(v1)
		break
	}
	catch{
		process.stdout.write( "Trying: " + j + '\r')
	}
}
