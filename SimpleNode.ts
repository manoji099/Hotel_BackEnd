import * as http from 'http';

const server = http.createServer((request, response) => {

    if (request.url === '/a')
        response.write("Correct URL has been invoked");
    else
        response.write("Incorrect URL has been invoked");
    response.end();

});

server.listen(process.env.PORT || 3005,
    () => console.log("server running at port 3005"));



