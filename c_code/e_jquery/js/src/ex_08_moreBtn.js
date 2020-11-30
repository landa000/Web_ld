// ex_08_moreBtn.js

(function($){

  $.ajax({
    url:'../data/random_people.json',
    dataType:'json',
    context: document.body
  }).done(function(data){
    var people = data;
    var i = 0;
    var myLen;
    var myViewLen = 5;
    var maxLen = people.length;
    var part = $('.part');
    var partUl = part.find('ul');
    // var partLi = partUl.children('li');
    var partLi, partDl, partDt, partDd, insertArr;
    var insertCode = '<li><div class="image"></div><div class="Id"></div><dl><dt>title</dt><dd>email</dd></dl></li>'
    var more = $('.more_btn');
    var moreBtn = more.children('button');
    var liEq;

// ===========================================================

    moreFn = function(j){
      var k;
      if( j === 'undefined'){
        k = myViewLen;
      }else{
        k = j;
      }

  // 1. ( j === undefined )? k = myViewLen : k = j; 
  // => j가 undefined일 경우 k는 myViewLen과 같다. :(!== 과 동일) 그렇지 않을시 k=j로 만듦 
  // 2. k = j || myViewLen; 

      myLen = i+k;
      for(; i < myLen ; i+=1){
        if( i>= maxLen){
          more.remove();
          break
        }else{
          partUl.append(insertCode);
          liEq = partUl.children('li').eq(i);
          liEq.find('.Id').text(data[i].id);
          liEq.find('.image').css({'backgroundImage':'url('+data[i].image_data+')'});
          liEq.find('dt').text(data[i].first_name);
          liEq.find('dd').text(data[i].address);
        } 
      } // for
    };
    
    moreFn(5);

    moreBtn.on('click',function(e){
      e.preventDefault();
      // myViewLen = 10;
      moreFn(10);
      });
  });

})(jQuery);