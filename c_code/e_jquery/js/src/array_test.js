// array_text.js

(function($){
  $.ajax({
    url:'../data/sample_data.json',
    dataType : 'json',
    context:document.body
  }).done(function(data){

    var sample = data;
    var listData = [];

    var Area = $('.Area');
    var areaUl= Area.children('ul');
    var areaLi;
    var tag = '<li><a href="#"></a></li>'

    var i=0, colorSelect,n,m;
  
    n = 0;
    var ListSet = function(){
      listData.push(sample[0].color);
      
    $.each(listData, function(idx, item){
      areaUl.append(tag);
      areaLi = areaUl.find('li a');
      areaLi.text(listData.brand);
      console.log(listData);
    });
    }
    ListSet();

    // m = sample[n].color.length;
    // colorSelect = sample[n].color[m].brand;
    // console.log(colorSelect);

  });
})(jQuery);