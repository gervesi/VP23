const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");

http.createServer(function(req, res){
	console.log(url.parse(req.url, true));
	let currentURL = url.parse(req.url, true);
	if(currentURL.pathname === "/"){
		//määrame tagastatavate andmete päise, et on veebileht
		res.writeHead(200,{"Content-Type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('<p><a href="addName">Lisame nime</a>!</p>');
		res.write(pageFoot);
		res.write(</body></html>');
		res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>German Vesi, veebiprogrammeerimine 2023</title></head> <body>');
		//<p>aeg console.log
		res.write('\n\t<img src="public/bannner.png" alt="Lehe banner">\n');
		res.write('<h1>German Vesi</h1><p>See leht on loodud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudis õppetöö raames!</p><p><a href="https://www.youtube.com/watch?v=hvL1339luv0" target="_blank">Ära vajuta</a></p><p><a href="https://www.youtube.com/watch?v=rhvF2_JkDhQ" target="_blank">Best meme ever</a></p><hr><p>Kursus, mille raames leht tehti on: veebiprogrammmeerimine</p></body></html>')
		//et see kõik valmiks ja
		return res.end();
	else if (currentURL.pathname ===
		res.writeHead(200,{"Content-Type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('<p>Palun lisa oma nimi</p>');
		res.write(pageFoot);
		res.write(</body></html>');
		return res.end();
		
	}
	} else if (currentURL === "/banner.png"){
		console.log("Tahan pilti!")
		let filePath = path.join(_dirname, "public", "banner/banner.png");
		fs.readFile(filePath, (err, data)=>{
			if(err){
				throw err;
			}
			else {
				res.writeHead(200, {"Content-Type": "image/png"});
				res.end(data);
			}
		});
	}
}).listen(5217);

//5217 mina

//http://greeny.cs.tlu.ee:5217/