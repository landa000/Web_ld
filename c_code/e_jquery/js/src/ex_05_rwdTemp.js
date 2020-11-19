// ex_05_rwdTemp.js

/**
  1. 브라우저의 가로 크기값 확인
  2. 내가 원하는 기준치 범위에 맞게 설정됐는지 확인(모바일, 태블릿, 피씨 등) 
  3. 브라우저의 크기가 변경될때('resize') 기존 가로값과 변경된 값을 비교,
     일치하지 않을 시 일부 재처리
 
 */
var deviceSize = function(){
  var resultDevice;
 (function($){

  // var winW = win.css('width'); // 1. 문자로 값을 가져옴(parseInt) 2.padding,margin,border
    // 선택자.width() => 가로값을 수치화
    // .innerWidth() => padding포함 값
    // .outerWidth() => border(padding 포함)
    // .outerWidth(true) => margin(border, padding 포함)

// ========================================================================
  // 기준치를 설정 [ 480, 1024, 1440, 1920(없어도 무관)]
  var deviceType = [
      {type:'mobile',size:480},
      {type:'tablet',size:1024},
      {type:'laptop',size:1440},
      {type:'pc',size:1920},
      {type:'pcfull'},
  ];

  var win = $(window);
  var beforeWinW = win.outerWidth(true);

// ==========================================================================

  var deviceCheck = function(winW){
    var myType;
    /*
    if(winW <= deviceType[0].size){
      myType = deviceType[0].type;
    }else if(winW <= deviceType[1].size){
      myType = deviceType[1].type;
    }else if(winW <= deviceType[2].size){
      myType = deviceType[2].type;
    }else if(winW <= deviceType[3].size){
      myType = deviceType[3].type;
    }else{
      myType = deviceType[deviceType.length-1].type;
    }
    */

    for(var i=0; i < deviceType.length ; i+=1){
      if(winW <= deviceType[i].size){
        myType = deviceType[i].type;
        break;
      }else{
        myType = deviceType[deviceType.length-1].type;
      }
    }
    console.log(myType);
    return myType;
  }

  var winSize = deviceCheck(beforeWinW);
  resultDevice = winSize;
  
// ==================================================================

  win.on('resize',function(){
    var reWinW = win.outerWidth(true); // 크기값 재확인
    var afterWinSize = deviceCheck(reWinW);
    // 기존 디바이스타입과 변경된 브라우저의 변수값이 다른 경우에 새로고침
    if(winSize !== afterWinSize){
      location.reload();
    }
  });
  return resultDevice;
  })(jQuery);
  return resultDevice;
};