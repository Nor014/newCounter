'use strict';
let connection = new WebSocket('wss://neto-api.herokuapp.com/counter');
let counter = document.querySelector('.counter');

let error = document.querySelector('.errors');

connection.addEventListener('open', event => console.log('Its alive'));

connection.addEventListener('message', function (event) {
  let data = JSON.parse(event.data);
  counter.innerText = data.connections;
  error.innerText = data.errors;
});

connection.addEventListener('beforeunload', () => {
  connection.close(1000, 'Its done')
})
