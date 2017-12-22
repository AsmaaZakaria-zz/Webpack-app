/**
  TraversyTree Webpack Tutorial
  app.js ==> your entry point
  bundle.js ==> your code after parsing
  run:
  - $webpack app.js bundle.js
  - $webpack app.js bundle.js --watch
  - $webpack                          // in case of using webpack.config.js file
  - $npm run build                    // using build
  - $npm start                        // using start - webpack-dev-server
*/

// one
// alert("Hello World")

// two
// alert(require('./people.js'))

// three
// let people = require('./people.js');
// console.log(people);
// console.log(people[0]);
// console.log(people[0].name);

//four
// let $ = require('jquery');
// let people = require('./people.js')
// // $('body').append('<h1>'+people[0].name+'</h1>')
// $.each(people, function(key, value) {
//   $('body').append('<h1>'+people[key].name+'</h1>')
// })

// five
// require('!style-loader!css-loader!./style.css')   // use css-loader & style-loader on style.css file
// let $ = require('jquery');
// let people = require('./people.js')
// $.each(people, function(key, value) {
//   $('body').append('<h1>'+people[key].name+'</h1>')
// })

// six ... using config file
require('../css/style.css')
let $ = require('jquery');
let people = require('./people.js')
$.each(people, function(key, value) {
  $('body').append('<h1>'+people[key].name+'</h1>')
})
