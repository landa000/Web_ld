// ex_05_rwdTemp_import_module.js

(function($){
  var nowW = deviceSize();
  // console.log(nowW);
  var deviceType = ['mobile','tablet','laptop','pc','pcfull'];

  var url = './rwdTemp/';
  var viewBox =$('#viewBox');

  // ========================================
  var viewImport = function(){
    viewBox.append('<script src = "../js/src/temp_moblie.js"></script>')
  } // 개별 js 불러오기 

    if(nowW === deviceType[0]){
      viewBox.load( url + 'rwdTemp_mobile.html', viewImport);
    }else if(nowW === deviceType[1]){
      viewBox.load( url + 'rwdTemp_tablet.html');
    }else{
      viewBox.load( url + 'rwdTemp_pc.html');
    }

})(jQuery);