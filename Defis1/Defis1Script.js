//import * as utils from 'utils.js';

function requestNode(transacHex){
	alert("fonctionnode");
	//alert(Client);	
	client.getRawTransaction(transacHex, 1).then((help) => console.log(help));
	return help;
}
function requestTransac(){
	alert("fonctiontransac");
	document.getElementById('transac').innerHTML = requestNode(document.getElementById('transacHexIn').value);
}

function convert(){
	switch (document.getElementsByName('operat').values) {
		case hexDec:
			document.getElementById(varOut).innerHTML = utils.hexToDec(document.getElementById('varIn').value);
			break
		case decHex:
			document.getElementById(varOut).innerHTML = utils.decToHex(document.getElementById('varIn').value);
			break;
		case hexLeHex:
			document.getElementById(varOut).innerHTML = utils.hexleToHex(document.getElementById('varIn').value);
			break;
		case varIntDec || cvBiCiCo || ciDif:
			document.getElementById(varOut).innerHTML = utils.varIntToDec(document.getElementById('varIn').value);
			break;
		
		default:
			break;
	}
}
const utils = require('./utils.js')

const Client = require('bitcoin-core');
const client = new Client({ network: 'regtest', username: 'bitcoin', password: 'bitcoin', port: 18443 });

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
	var q = url.parse(req.url, true);
	var filname = "." + q.pathname;
	fs.readFile(filname, function(err, data){
	  if(err){
	    res.writeHead(404, {'Content-Type': 'text/html'});
	    console.log(err);
	    return res.end("404 Not Found, Balo!!!" + err);
	  }
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write(data);
	  return res.end();
	});
}).listen(8080);


//client.getRawTransaction('fa02712f4c7a400a960a2ab6686fee5385002373d5e3e5952ef2b38b76743d97', 1).then((help) => console.log(help));
//document.getElementById('afficher').addEventListener('click', event =>{
  //transacHex = document.getElementById('transacHex').value
  //var trans = client.getRawTransaction(transacHex, 1).then((help);
  //document.getElementById('transac').innerHTML = 'yo'
//})