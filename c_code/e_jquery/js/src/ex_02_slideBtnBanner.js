// ex_02_slideBtnBanner.js

(function($){

  var slide01 = $('.slide_01');
  var slide01Btn = slide01.children('.slide_btn');
  var s01Button = slide01Btn.children('button');
  
  var slide01wrap = slide01.children('.slide_wrap');
  var s01ul = slide01wrap.children('ul');
  var before_S01li = s01ul.children('li');
  // console.log($(s01Button)[1]);

  var cloneLastLi_s01 = before_S01li.eq(-1).clone(true);
  s01ul.prepend(cloneLastLi_s01);
  var Re_s01li = s01ul.children('li');

  s01ul.css({'width': Re_s01li.length * 100+'%', 'position':'relative','left':'-100%'});
  Re_s01li.css({'width':100 / Re_s01li.length +'%'});

  var slideN = 0;
  var permission = true;
  var timed = 300;
/*
slide01Btn.children('.next_btn').on('click',function(e){
    e.preventDefault();
    if(permission === true){// === 물어보기(대입)
      permission = false;
      if( slideN >= before_S01li.length-1 ){ 
        slideN = -1;
        s01ul.css({'marginLeft': slideN * -100+'%'});
        }
        slideN += 1;
        s01ul.stop().animate({'marginLeft': slideN * -100 +'%'}, function(){
          setTimeout(function(){
            permission = true;
          },timed/3);
      });
    }// if end
  });

slide01Btn.children('.prev_btn').on('click',function(e){
  e.preventDefault()
  if(permission === true){
    permission = false;
    slideN -= 1;
    s01ul.stop().animate({'marginLeft': slideN * -100 +'%'}, function(){
      if( slideN <= -1 ){ 
        slideN = before_S01li.length-1 ;
        s01ul.css({'marginLeft': slideN * -100+'%'});
      }
        setTimeout(function(){
          permission = true;
        },timed/3); // 클릭 간 시간제어
      });
    }//if(permission) end
  }); // 버튼을 분리하여 개별처리
*/

  // 동일한 역할의 버튼을 묶어서 기능따라 처리하도록 함(if문)
  
  slideN = 0;

  s01Button.on('click',function(e){
    e.preventDefault();
      if(permission === true){
        permission = false;
        var it = $(this);
        var itClass = it.attr('class'); // 버튼의 class를 판별
         if(itClass === 'next_btn'){// 다음 버튼
            if( slideN >= before_S01li.length-1 ){ 
            slideN = -1;
            s01ul.css({'marginLeft': slideN * -100+'%'});
          } 
          slideN += 1;
              // 기존보다 값을 1 줄였으므로 공백구간이 사라짐
              // css 값을 먼저 앞의 배치함으로 위치값 -> animate 순으로 처리하게 만듦
              // 전,후 둘중 하나만 처리하면 ㅇㅋ
        }else if(itClass === 'prev_btn'){// 이전 버튼
          slideN -= 1;
          }
          s01ul.stop().animate({'marginLeft': slideN * -100 +'%'}, function(){
            if( slideN <= -1 ){ 
                slideN = before_S01li.length-1 ;
                s01ul.css({'marginLeft': slideN * -100+'%'});
              }
            setTimeout(function(){
              permission = true;
              },timed/3);
          });   
      } //if(permission) end
  });

})(jQuery);