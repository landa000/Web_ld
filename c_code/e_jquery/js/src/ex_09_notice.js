// ex_09_notice.js

(function($){

    $.ajax({
      url:'../data/random_people.json',
      dataType:'json',
      context: document.body
    }).done(function(data){

      var myViewLen = 60;

      var dataFile;
      dataFile = data.sort(function(a,b){ //sort => 정렬
        return b.id - a.id; // b(뒤) - a(앞) 재배치
      });

      var noticeCode = '<li><a href="#"><em></em><span></span></a></li>';
      var indiCode = '<li><a href="#"></a></li>'

      var notice = $('.notice_board');
      var noticeCon = notice.children('.context');
      var noticeUl = noticeCon.children('ul');

      var indiCon = notice.children('.indicator');
      var indiUl = indiCon.children('ul');

      // 기본 세팅-myViewLen은 상단에 위치

      // 인디케이터 생성
      var indiLen = Math.ceil(dataFile.length / myViewLen); 
      // 전체 데이터 갯수 / 표시하고 싶은 갯수
      var indiN = 0;
      var indiLi;

      for( ; indiN<indiLen; indiN+=1){
        indiUl.append(indiCode);
        indiLi = indiUl.children('li').eq(indiN);
        indiLi.find('a').text(indiN+1);
      }

      // 내용 넣기
      var reSetting = function(n){
        var i = 0;
        var k = n || 0; // k는 n, n이 아닐경우 0

        var settingLen = i+myViewLen;
        noticeUl.empty(); // 앞에 불러와진 태그 제거
        for(; i<settingLen ; i+=1){
          if(dataFile[i+k] === undefined){
            break;
          }else{
            noticeUl.append(noticeCode);
            noticeLi = noticeUl.children('li').eq(i);
            noticeLi.find('em').text(dataFile[i+k].id)
            noticeLi.find('span').text(dataFile[i+k].address)
          }

        }
      }

      reSetting(); // 함수실행

      var indiBtn = indiUl.children('li').children('a');
      indiBtn.on('click',function(e){
        e.preventDefault();
        var btnN = parseInt($(this).text())-1;
        var liSetN = btnN * myViewLen;
        reSetting(liSetN); // 0,50,100 ...
        indiBtn.eq(btnN).addClass('action');
      });

      // 한번에 표시할 내용 조절 + 인디케이터 생성
      // 역순으로 배치(switch)

      var selectArea = $('.select_area').find('button');
      selectArea.on('click',function(e){
        e.preventDefault();
        var i = $(this).index();
        switch(i){
          case 0: // 0번째(육안 첫번째) 버튼 클릭시
            dataFile = data.sort(function(a,b){
              return a.id - b.id;
          });
          reSetting();
          break;
          case 1: // 1번째(육안 두번째) 버튼 클릭시
            dataFile = data.sort(function(a,b){
              return b.id - a.id;
            });
            reSetting();
          break;
        }
    }); 
  });
})(jQuery);