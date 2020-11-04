// jq_01_selector.js

// $(document).ready(function(){});
// $(function(){});

(function($){
  // $('#box').css({width: 100+'px', height:100+'px', backgroundColor:'#ff0'});
  var box = $('#box');
  box.css({'width':100 +'px', 'height':100+'px','backgroundColor':'#ff0'});
  var boxTwo = $('.box_two');
  boxTwo.css({'width':300+'px','height':50+'px','border':3+'px '+'solid '+'#aff'});
  // boxTwo.css('width',300+'px');
  // boxTwo.css('height',50+'px');
  // boxTwo.css('border','3px '+'solid '+'#aff');

  var listTri = $('.list_triple');
  var listLi  = listTri.children('li');
  listLi.css({'backgroundColor':'#fcb', 'marginBottom':5+'px',
                'width':150+'px'});
  // .list_triple > li:nth-child(1)
  listTri.children('li:nth-child(1)').css({'color':'#07a'});
  listTri.children('li').eq(2).css({'color':'#33a','fontWeight':700});
  listTri.children('li').eq(3).css({'color':'#a33','fontSize':1.25+'rem'});

  var listOl = listTri.find('ol'); 
  listOl.css({'border':'5px solid #779', 'padding':3+'px'})
    // ol::marker, ol::before, ol::after

  var style = $('style');
  style.append('#wrap{width:800px; background-color:#eeeaea; margin:auto;');
  style.append('#wrap::after{content:"write here!"}');

  // ====================================

  var p2List = $('.part_2_list');
  var p2Li   = p2List.children('li');
  p2List.css({'listStyle':'none'});
  p2Li.css({'width':100+'px', 'height':20+'px', 'marginBottom':8+'px','backgroundColor':'#d2dada'});
  p2Li.eq(4).css({'color':'#07f','fontWeight':'700'});
  p2Li.eq(4).prevAll().css({'textAlign':'right','borderRadius':10+'px'}); //prev() 해당 위치 이전의 요소 선택
  p2Li.eq(-5).css({'fontWeight':700, 'color':'#f07'});
  p2Li.eq(-5).next().css({'backgroundColor':'#ff7'});
  p2Li.eq(-5).nextAll().css({'boxShadow':'3px 3px 0 #0f8 inset'});// method chain

  p2Li.eq(10).parent().css({'border':'3px dotted #171710'}); // 부모, 복수로 쓰면 최상위까지 선택됨
  p2Li.eq(10).parents('#wrap').css({'border':'1px dotted #171710'}); // parents(a) a만 선택
  p2Li.eq(10).parentsUntil('#wrap').css({'outline':'5px solid rgba(59,50,57,0.4)'}); 
  // Until(a) a를 제외한 부모요소 선택

  // 당신의 부모의 부모 형테중에 첫째에게 사과를 주세요
  // li.parent().parent().siblings().eq(0)

  p2Li.parent().siblings().css({'backgroundColor':'#cfc','padding':10+'px','marginBottom':10+'px'});
// ===================================================================

  var evt = $('.evt');
  var evtLi = evt.children('li');

  evtLi.eq(0).on('click',function(e){
    e.preventDefault();
    evtLi.css({'backgroundColor':'#aa7'});
  });
  evtLi.eq(1).on('click',function(e){
    e.preventDefault();
    evtLi.css({'backgroundColor':'transparent'});
  });

  evtLi.on('click',function(e){
    e.preventDefault(); // 선택한 요소를 제외한 나머지 li에 border-bottom 적용

    $(this).css({'border':'none'});
    $(this).siblings().css({'borderBottom':'5px solid #279'});
    var thisI = $(this).index() // index() 순서를 확인 
    console.log(thisI);;
  })

})(jQuery);

  /*
  click, dblclick, mousedown, mouseup, mousemove
  mouseenter, mouseleave, mouseover, mouseout
  keypress, keydown, keyup
  focus, blur
  touchstart, touchend, touchmove
  scroll, resize
  */

  /*
  var lli = document.getElementsByTagName('li');
  for(var i=0; i<listLi.length; i+=1){
    lli[i].style.backgroundColor = '#acf';
    lli[i].style= 'font-size:0.8rem; font-weight:700';
  } // javascript
  */