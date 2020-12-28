// ex_17_map.js

var container = document.getElementById('map');
// 37.262542069413236, 127.03169991136103

var MySetMap = function(lat, lng){
	var options = {
		center: new kakao.maps.LatLng(lat, lng),
		level: 3
	};

	var map = new kakao.maps.Map(container, options); // 지도를 생성합니다

	var markerPosition  = new kakao.maps.LatLng(lat, lng); 
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	    position: markerPosition
	});
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);

			// 지도 타입 변경 컨트롤을 생성한다
			var mapTypeControl = new kakao.maps.MapTypeControl();

			// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
			map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);	
	
			// 지도 확대 레벨 변화 이벤트를 등록한다
			kakao.maps.event.addListener(map, 'zoom_changed', function () {
				console.log('지도의 현재 확대레벨은 ' + map.getLevel() +'레벨 입니다.');

			// // 지도에 확대 축소 컨트롤을 생성한다
			// var zoomControl = new kakao.maps.ZoomControl();
			// // 지도의 우측에 확대 축소 컨트롤을 추가한다
			// map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

			});

}; // MySetMap();

// ==================================================
	(function($){

		var store = $('.store');
		var storeLi = store.find('li');

		storeLi.on('click', function(e){
			e.preventDefault();
			$('map').empty(); // 소스코드 중복누적 방지

			var liLink = $(this).children('a');
			var liLat = parseFloat(liLink.attr('data-X'));
			var liLng = parseFloat(liLink.attr('data-Y')); // parseFloat 소수까지 변환
			console.log(liLat, liLng);
			MySetMap(liLat, liLng);

			$(this).addClass('action');
			$(this).siblings().removeClass('action');
		});

	})(jQuery);