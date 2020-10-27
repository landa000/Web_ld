/*
var a = [1,2,3];
a.push('one');
console.log(a);
a.shift();
console.log(a);
a.push('three');
a.push('four');
console.log(a);
a.pop();
a.pop();
console.log(a);
a.unshift('before');
console.log(a);
a.concat();
console.log(a); */

var b = [1,2,3];
var c = [4,5,6];
var d;

d = b.concat(c);
// console.log(d);

var ar=[];
// ar = new Array;// js에서 사용하지 않음
ar[4] = 'in string';
// console.log(ar);

var arrQ_01 = [];
var i = 0;
for( ; i<100; i+=1 ){
  if(i < 101){
    arrQ_01[i] = i+1;
  }}
// console.log(arrQ_01);


var arrQ_02 = [];
var j = 0, k, l;
for ( ; j<100 ; j+=1){
     k =  j % 2;
     if(k === 0){
       continue;
      }  else if(k !== 0){
        arrQ_02.push(j);
      }
      /*  
  l = parseInt(j/2);
  arrQ_02[l] = j; */
}
// console.log(arrQ_02);

var arrQ_03 = [];
var m = 0;
for ( m=0; m<100; m+=1){
  if(m < 101)
  {arrQ_03[m] = 100-m;}
}
// console.log(arrQ_03);
// var arrQ_03 = [];
// var m = 0;
// for( ; m<100; m+=1 ){
//   if(m < 101){
//     arrQ_03[m] = m+1;
//   }}
// console.log(arrQ_03(reverse));


// var arrQ_04 = [];
// var n = 0, o;
// for ( ; n<100 ; n-=1){
//   o = n%2;
//   if(n === 0){
//     continue;
//   }else if(n !== 0){
//     arrQ_04.push(o);
//   }
// } 오답

var arr_li = [ 'nav_01', 'nav_two', 'nav_03', 'four'];
var nav = document.getElementsByClassName('nav')[0];
var n = 0, li, link;
var arr_li_Len = arr_li.length;
for( ; n<arr_li_Len ;n+=1){
  if( n+1 ){ 
  li = document.createElement('li');
  link = document.createElement('a');
  li.append(link);
  li.classList.add(arr_li[n]);
  link.setAttribute('href','./'+arr_li[n]+'.html');
  li.innerHTML='<span>'+(n+1)+'<span>';
  nav.append(li)}
}
