// js_07_function_ex1.js

var btnEl = document.getElementsByClassName('btn')[0];
// console.log(btnEl);
var btnChildButton = btnEl.childNodes[1];
// console.log(btnChildButton);
var resultBox = document.getElementsByClassName('result')[0];
// console.log(resultBox);

// 1.버튼을 클릭하면
// 버튼.이벤트(수행)

// 2. resultBox 내부의 색상을 변경
// 이벤트 발생에 의해 --> resultBox색상변경(수행)

var myBg = function(){ resultBox.style.backgroundColor = '#faa';};
btnChildButton.addEventListener('click', myBg);