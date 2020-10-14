// main.js

// 불러온 jquery 버전확인
// console.log ($.fn.jquery);

// 1. css 문법을 이용하여 jQuery 문법으로 수정
// .Nav ul > li:hover > ol { display:block;}

// .Nav > ul > li > a에 마우스 올리거나 focus를 잡을경우

var navLink = $('.Nav > ul > li > a');
navLink.on('mouseenter focus', function(){
    // 마우스 올리기, 포커스 처리 된 상태의 a 바로 뒤 ol을 나타나게 만들기
    // 1. 마우스 올리기, 포커스 처리 된 상태의 a : $(this)
    navLink.next('ol').hide();
    $(this).next('ol').show();
});

// .

var navBox = $('.Nav');
navBox.on('mouseleave', function(){
    navBox.find('ol').hide();
});

// --------------------------------------
// banner_context 이벤트처리(클릭) 시, 다음 기능(function)을 수행

var bannerContext = $('.banner_context');
var modalWin = $('.modal_window');


bannerContext.on('click', function(){
    // .modal_window를 나타나게 만들기
    modalWin.fadeIn();
});


    // .modal_window의 자식인 .close 버튼을 클릭 시, 다음 기능을 수행
var closeBtn = modalWin.children('.close');
closeBtn.on('click',function(){
    modalWin.fadeOut();
});


