// monffee_main_module.js

// $(document).ready(function(){/* jQuery */});
// $(function(){/* jQuery */});

(function($){
  //jQuery
  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var bestNewsBox = $('#bestNewsBox');
  var issueBox = $('#issueBox');

  headBox.load('./monffee/headBox.html');
  viewBox.load('./monffee/viewBox.html');
  bestNewsBox.append('<script src="../js/src/monffee_bestNewsBox.js"></script>');
  issueBox.load('./monffee/issueBox.html');
  // ,function(){
  //   $(this).append('<script src="../js/src/monffee_issueBox.js"></script>')}

})(jQuery); 

// html에서 꼭 하단에 작성
// jQuery의 선택자 형태는 css와 매우 유사하다
// 단, $('')를 이용하여 내부에 선택자를 작성해야함