var handler = require('./request-handler');
var stubs = require('./spec/Stubs');

// var req = new stubs.request('/classes/messages', 'GET');
// var res = new stubs.response();
// debugger;
// handler.requestHandler(req, res);

// console.log(JSON.parse(res._data));

var stubMsg = {
  username: 'Jono',
  text: 'Do my bidding!'
};

var req = new stubs.request('/rfp/messages', 'GET', stubMsg);
var res = new stubs.response();

console.log(res)