const http = require("http");

http.createServer(function(req, res){
	//määrame tagastatavate andmete päise, et on veebileht
	res.writeHead(200,{"Content-Type": "text/html"});
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>German Vesi, veebiprogrammeerimine 2023</title></head> <body>');
	//<p>aeg console.log
	res.write('<h1>German Vesi</h1><p>See leht on loodud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudis õppetöö raames!</p><p><a href="https://www.youtube.com/watch?v=hvL1339luv0" target="_blank">Ära vajuta</a></p><p><a href="https://www.youtube.com/watch?v=rhvF2_JkDhQ" target="_blank">Best meme ever</a></p><hr><p>Kursus, mille raames leht tehti on: veebiprogrammmeerimine</p></body></html>')
	//et see kõik valmiks ja
	return res.end();
}).listen(5217);

//5217 mina

//http://greeny.cs.tlu.ee:5217/