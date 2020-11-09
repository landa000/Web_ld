// monffee_issueBox.js

(function($){

var issueBox = $('#issueBox');
var issueText = issueBox.find('.issue_text')
var issueIndicator = issueText.find('.issue_indicator');
var issueBtn = issueIndicator.find('.auto_slide_btn');
var autoPlay = issueBtn.children('.auto_play');
var autoPause = issueBtn.children('.auto_pause');

var issueIndiUl= issueIndicator.find('.check_indi');
var issueIndiLi= issueIndiUl.find('li');

var issueTextArea = issueText.find('.issue_text_area');
var issueUl = issueTextArea.find('ul');
var issueLi = issueUl.find('li');
var timed = 500;
var issueLiLen = issueLi.length;

// ===============================================
/* 1. 인디케이터 list를 클릭 시 각 위치로 이동 */

var permission = true; // slide 통과여부
var itIndex = 0;

// 함수수행기능 별도로 처리
var slideFn = function(itIndex){
  issueUl.stop().animate({ marginLeft: itIndex * -100 +'%'}, timed, function(){ // 클릭 수 만큼 내용 넘기기
    issueIndiLi.eq(itIndex).addClass('action'); // 클래스명 부여
    issueIndiLi.eq(itIndex).siblings().removeClass('action'); // 대상 이외 클래스명 제거

    setTimeout(function(){
      permission = true;
    }, timed/2); // 지정한 시간의 1/2으로 클릭 동작 딜레이
  });
}

issueIndiLi.on('click', ['a'], function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    itIndex = $(this).index();
    slideFn(itIndex);
  }
});
// ===============================================
/* 2. 자동 슬라이드 처리 */

var mySlideGo;
var slideGoFn = function(){ // 자동슬라이드 함수
  mySlideGo = setInterval(function(){
    autoPlay.addClass('action');
    autoPause.removeClass('action');

    itIndex += 1; // 클릭 수 카운트
    if ( itIndex > issueLiLen-1){ // 총 갯수-1에 도달했을시 0으로 돌림
      itIndex = 0;
    }
    slideFn(itIndex);
  }, timed * 3); // 지정된 시간의 1/3로 복귀
};

var slideStopFn = function(){ // 자동슬라이드 정지 함수
  clearInterval(mySlideGo);
  autoPause.addClass('action');
  autoPlay.removeClass('action');
};

slideGoFn();

autoPause.on('click', function(e){  e.preventDefault();
  slideStopFn();
});
autoPlay.on('click', function(e){  e.preventDefault();
  slideGoFn();
});

})(jQuery);

