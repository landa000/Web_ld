// js_09_ex.js
console.log(arrObj);

var product = document.getElementsByClassName('product')[0];

// product.innerHTML = '<div><h3><p><a href="></a></p></h3></div>';
// var div = product.children('div')[0];
// div.classList.add('apple');

var url = '../img/';

var div, h3, par, par2, link;
for(var i=0; i<arrObj.length; i+=1){
  div = document.createElement('div');
  h3 = document.createElement('h3');
  imgBox = document.createElement('div');
  par = document.createElement('p');
  par2 = document.createElement('p');
  link = document.createElement('a');
  
  div.classList.add(arrObj[i].company);
  h3.innerText =arrObj[i].company;
  imgBox.classList.add('product_img');
  link.setAttribute('href', arrObj[i].site);
  link.innerText = arrObj[i].serise;
  par2.innerText = arrObj[i].content;
  
  imgBox.style='background-image:url( '+ url + arrObj[i].img +')';

  product.append(div);
  div.prepend(imgBox);
  div.prepend(h3);
  div.append(par);
  div.append(par2);
  par.append(link);
}