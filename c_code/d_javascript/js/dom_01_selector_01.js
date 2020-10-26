// dom_01_selector_01.js

var wrap = document.getElementById('wrap'); // $('#wrap');
wrap.style = 'background-color:#ccf; \
              border:2px solid #333';
var headBox = document.getElementById('headBox');
headBox.style = 'width:100%; height:250px; background-color:#faa;'

var h1 = document.getElementsByTagName('h1')[0]; // $('h1');
h1.style = 'width:150px; height:50px; background-color:#c99';

var h1Link = h1.getElementsByTagName('a')[0]; // h1.find('a');
h1Link.style = 'text-decoration:none; color:#fff;'

// var navBox = document.getElementById('navBox');
var navBox = document.querySelector('#navBox');
navBox.style = ' width:70%; \
padding:0; margin:auto; background-color:#fff';

var navList = navBox.querySelectorAll('li');
// navList[0].style = 'background-color:#ffcf70; margin-bottom:2px;'
navList.forEach( function(data){
  data.style = 'background-color:#ffcf70; margin-bottom:5px; list-style:none;'
});