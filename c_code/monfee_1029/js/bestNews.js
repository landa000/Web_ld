// bestNews.js

arrMenu = [
  { 'title' : 'Lorem menu1',
    'sub' : 'what is going now? check this out!',
    'img' : 'menu_01.png'},
  { 'title' : 'Lorem menu2',
    'sub' : 'what is going now? check this out!',
    'img' : 'menu_02.png'},
  { 'title' : 'Lorem menu3',
    'sub' : 'what is going now? check this out!',
    'img' : 'menu_03.png'},
  { 'title' : 'Lorem menu4',
    'sub' : 'what is going now? check this out!',
    'img' : 'menu_04.png'},
  { 'title' : 'Lorem menu5',
    'sub' : 'what is going now? check this out!',
    'img' : 'menu_05.png'},
  { 'title' : 'Lorem menu6',
    'sub' : 'what is going now? check this out!',
    'img' : 'menu_06.png'},
  { 'title' : 'Lorem menu7',
    'sub' : 'what is going now? check this out!',
    'img' : 'menu_07.png'}
]


var menu = document.getElementsByClassName('menu')[0];

var url = '../img/menu/';

var div, h3, part,newsTitle;
for( var i=0 ; i<arrMenu.length ; i+=1){
  div = document.createElement('div');
  h3 = document.createElement('h3');
  imgBox = document.createElement('div');
  part = document.createElement('p');


  div.classList.add('menu_card');
  h3.innerText = arrMenu[i].title;
  imgBox.classList.add('menu_img');
  part.innerText = arrMenu[i].sub;

  imgBox.style='background-image:url('+ url + arrMenu[i].img +')';

  menu.append(div);
  div.prepend(imgBox);
  div.prepend(h3);
  div.append(part);
}
