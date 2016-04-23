var connect = require('connect'),
    http = require('http'),
    serve = require('serve-static'),
    app = connect();

app.use(serve('public'));

http.createServer(app).listen(3000);
console.log('Connect server running on port 3000...');
