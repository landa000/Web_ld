// ex_09_notice.js

(function($){

    $.ajax({
      url:'../data/random_people.json',
      dataType:'json',
      context: document.body
    }).done(function(data){

      var myViewLen = 25;

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

      // 인디케이터 노출 갯수 조정
      var indiViewLen = 5; // 표시갯수
      var iv = 0;
      var memoryN;

      indiLi = indiUl.children('li');

      // for(; iv < indiLen; iv+=1){
      //   if(iv < indiViewLen){
      //     memoryN = iv+1; // for문 반복실행에 앞서 이전 숫자를 기억하기 위한 변수 (5까지 로딩됐을경우 다음엔 6~10 로딩)
      //     continue; // indiViewLen 이하인 iv+1번째 li의 경우 패스
      //   }else{
      //     indiLi.eq(iv).hide();  // 위에서 선택되지 않은 li 전부 hide처리
      //   }
      // }

      for(; iv < indiLen; iv+=1){
        if(iv >= indiViewLen){
          indiLi.eq(iv).hide();
        }else{
          memoryN=iv+1;
        }
      }// 상단 for문과 같은 내용(서순차이)

      var nBtn = $('.next_notice');
      var pBtn = $('.prev_notice');

      nBtn.on('click',function(e){
        e.preventDefault();
        var nbn = memoryN; // 함수가 동작했을때 상단의 memoryN값을 가져옴
        indiLi.hide();
        for(; nbn< memoryN+indiViewLen ;nbn+=1){
          indiLi.eq(nbn).show();
        }
        memoryN = nbn; // nbn값을 다시 memoryN으로 만듦(5->10->15...)
        console.log(nbn);
      });

      // pBtn.on('click',function(e){
      //   e.preventDefault();
      //   // var nbn = memoryN; // 함수가 동작했을때 상단의 memoryN값을 가져옴
      //   indiLi.hide();
      //   for(; nbn <= memoryN+indiViewLen ;nbn-=1){
      //     indiLi.eq(nbn).show();
      //   }
      //   nbn = memoryN ; // nbn값을 다시 memoryN으로 만듦(5->10->15...)
      //   console.log(nbn);
      // });

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