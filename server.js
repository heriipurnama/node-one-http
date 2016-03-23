var http = require('http'); //dengan menggunakan modul http

var httpServer = http.createServer(function(request,response){ //menggunakan var dalam fungsi
		 console.log('client connected'); // tampilan dalam console saat konek server
		 response.writeHead(200,{"Content-Type":"text/plain"}); // type response dalam yang didapat client
		 response.end('webtunings'); //tampilan yang diperolah client
});

httpServer.listen(1448); //menjalankan pada 127.0.0.1:1448
	console.log('server running 1448');
