// js_09_object.js

// var obj = new Object; 사용X
var obj = { 'samsung':'galaxy',
            'apple':'iphone',
            'google' : 'pixel',
            'lg':'belbet'};
// console.log(obj);
// console.log(obj.google);
// console.log(obj['samsung']);

obj.nokia = 'banana';
// console.log(obj);
obj.Fn = function(person){
  return person + ' 반갑습니다';
};

var x = obj.Fn('riddle'); // .name(); <- name이 method
//console.log(x);

var arrObj = [
    { 'company':'apple',
      'serise':'iphone',
      'site':'http://apple.com',
      'content' : '2020 하반기 최신 아이폰 출시'},
    { 'company':'samsung',
      'serise' : 'galaxy21',
      'site' : 'https://samsung.com',
      'content' : '갤럭시 21 부품 유출'},
    { 'company':'LG',
      'serise' :'wing',
      'site' : 'https://lg.com',
      'content' : '가로본능 이즈 백'},
    { 'company':'xiaomi',
      'serise':'redmi',
      'site':'https://mi.com',
      'content' : '밀리지 않는 성능'},
];
// console.log(arrObj.length);
// var p = 0;
// for(; p < arrObj.length; p+=1 ){
//   console.log( (p+1) + '. ' +arrObj[p].serise);
// };
// arrObj.forEach(function(data, idx){
//   console.log( (idx+1) +'. ' + data.serise )
// });

var product = document.getElementsByClassName('product')[0];
var n=0, p, h3, link;
var arrLen = arrObj.length;
for(; n<arrLen ; n+=1 ){
  if(n+1){
  h3 = document.createElement('h3');
  h3.classList.add(arrObj[n].company);
  h3.innerHTML = (arrObj[n].company)
  p = document.createElement('p');
  link = document.createElement('a');
  p.append(link);
  link.setAttribute('href', arrObj[n].site );
  link.innerHTML =(arrObj[n].serise);
  product.append(h3,p);}
  console.log(arrObj[n].site );
}