// jq_03_makeRemove.js

(function($){

  var part = $('.part');
  var p = part.children('p');
  p.css({'border':"0.065rem solid #d87"});

  var text = part.find('.text');
  text.text('Insert coin or text');

  var html = part.find('.html');
  // $('head').html('') html 통째로 변경
  html.html('Insert <br /> coin or text');

  var wrap = part.find('.wrap');
  wrap.wrap('<dl><dt></dt></dl>');
  wrap.unwrap();

  var p4 = part.find('.p4');
  p4.prepend('<span>들어갔다!  </span>') 
  // prepend는 내부 앞에 생성하게 하는 메소드, 요소의 형태로 사용하지않을시 요소를 강제로 가져옴
  var mySpan = $('.preto');
  mySpan.prependTo(p4); // .preto를 prepend안에 삽입
  /*
    1. selectorA.prepend(selectorB);
    2. selectorB.prependTo(selectorD);

    1. A 내부에 B를 담는것
    2. D 내부에 C를 담는것 -> 없는 요소엔 할수었음

  */

  var p5 = part.find('.p5');
  p5.append('<span>뒷자리 착석</span>');
  mySpan.appendTo(p5);

  var p6 = part.find('.p6');
  var p6Con = p6.contents();//p6 내부의 내용을 모두 가져옴(뜯어냄), 직접 삽입 불가
  // console.log( p6Con );
  // p6.html('<a href="#"></a>'); // 기존내용 삭제됨
  // p6.children('a').html(p6Con);

  var p6Html = p6.html(); // -> 직접 삽입 가능
  p6.html('<a href="#">'+ p6Html +'</a>')
  // console.log( p6.html() ); // () 내부 그대로 가져옴
  console.log( p6Html );

  var p7 = part.find('.p7');
  p7.before('<div>before</div>');

  var p8 = part.find('.p8');
  p8.after('<div>after</div>');

  var p8Attr = p8.attr('title').split(' '); // attribute -> 속성을 처리하는 기능
  console.log( p8Attr );
  p8.attr({'data-x':'what time is now'});
  var arr = ['style','class','title'];
 
  // arr.forEach(function(d){
  //   p8.removeAttr(d);
  // }) - js방식

  $.each(arr,function(i,d){
    p8.removeAttr(d);
  });


})(jQuery);