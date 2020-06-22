var http = require('http'); // 1 - Import Node.js core module
const port = process.env.PORT || 5000;

const uri = "mongodb+srv://Rob:Cinderblock3@cluster0-jk0p0.mongodb.net/ADCOc19?retryWrites=true&w=majority";
const client = new MongoClient(uri);



var server = http.createServer(function (req, res) {   // 2 - creating server

    if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }

	
        res.end('ok');
    });
}

});

server.listen(port); //3 - listen for any incoming requests
