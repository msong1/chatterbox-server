/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};

var messages = [{username: 'MINSEOK', text: 'NOW YOU SEE ME'}];

var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log('Serving request type ' + request.method + ' for url ' + request.url); // GUESS: request.method ==> POST GET... / url requestURL ..../messages/CAMPUS

  // requestObj format =>
  // {
  //   url: '/classes/messages',
  //   method: 'GET',
  //   _postData: undefined,
  //   setEncoding: [Function (anonymous)],
  //   on: [Function: bound ],
  //   addListener: [Function: bound ]
  // }


  // response Obj format =>
  // {
  //   _ended: false,
  //   _responseCode: null,
  //   _headers: null,
  //   _data: null,
  //   writeHead: [Function: bound ],
  //   end: [Function: bound ]
  // }

  // The outgoing status.
  var statusCode;

  // See the note below about CORS headers.
  var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or Hheaders['Content-Type'] = 'application/JSON';

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  response.writeHead(statusCode, headers);

  if (request.method === 'GET' && request.url.includes('/messages')) {
    // need to check if it is a valid request somehow
    console.log('WHATS UP', response);
    // console.log('!! MESSAGES !!', messages);
    statusCode = 200;
    response.writeHead(statusCode, headers);
    response._data = messages;
    response.end(JSON.stringify(response._data));
  } else if (request.method === 'POST' && request.url.includes('/messages')) {
    // do we need to set statusCode?
    statusCode = 201; // according to Spec..
    response.writeHead(statusCode, headers);
    // unshift the message to the message list
    console.log(response);
    messages.unshift(request._postData);
    response.end('POST successful');
  } else {
    statusCode = 404;
    response.writeHead(statusCode, headers);
    response.end();
  }



  // if request.method === GET && includes classes/messages
    // set correct statusCode
    // response.writeHead(statusCode, headers);
    // response.end____ & stringify if needed

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.

};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.

module.exports.requestHandler = requestHandler;