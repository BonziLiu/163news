app.controller('playCtrl',['$scope','$http','$timeout',function($scope,$http,$timeout){
	
	    
    
    $http.get('./json/play1.json')
    .success(function(rep){
//  	console.log(rep);
    	$scope.roplayImg=rep.top;
	
	    $timeout(function(){
	    	var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		        paginationClickable: true,
		        spaceBetween: 30,
		        centeredSlides: true,
		        autoplay: 2500,
		        autoplayDisableOnInteraction: false
		    });
	    },1000)
    });
    
//  $scope.page = 20;
//  $scope.rows = 10;
//  $http.get('http://www.liubangqi.applinzi.com/new.php?page='+$scope.page+'&rows='+$scope.rows)
//  .success(function(data){
//		
//	  	var data = data.split('<')[0];
//	  	var result = JSON.parse(data);
////	  	console.log(result);
//	  	$scope.req=result.result;
//  })
 Bmob.initialize("01f860d1ceab5ae73c5af4bda51a49ac", "d651691d242b691826290c4a7cadf334");
var Play = Bmob.Object.extend('play');
	var query = new Bmob.Query(Play);
	
	//头条分类
	
	    $scope.req = [];
		query.equalTo("playClass", 1);
		query.find({
	    success:function(results) {
       	console.log("共查询到 " + results.length + " 条记录");
	        // 循环处理查询到的数据
	        for (var i = 0; i < results.length; i++) {
	        var objc = results[i];
			var temp={
	       		title:objc.attributes.playTitle,
	       		img:objc.attributes.playImg,
	       		
	       	}
			$scope.req.push(temp);
			$scope.$apply();
	        }
	    },
	    error: function(error) {
	    	    console.log(error);
	        alert("查询失败: " + error.code + " " + error.message);
	    }
	   
});	



    
}])