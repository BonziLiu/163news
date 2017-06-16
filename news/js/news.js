app.controller('newsCtrl',['$scope','$http',function($scope,$http){
	
	//banner
	
    Bmob.initialize("01f860d1ceab5ae73c5af4bda51a49ac", "d651691d242b691826290c4a7cadf334");
    var banner = Bmob.Object.extend('banner');
	var query = new Bmob.Query(banner); 
    $scope.newses = [];
		query.find({
	    success:function(results) {
//	       	console.log("共查询到 " + results.length + " 条记录");
	        // 循环处理查询到的数据
	        for (var i = 0; i < results.length; i++) {
	        var objc = results[i];
			var temp={
	       		title:objc.attributes.title,
	       		img:objc.attributes.img,
	       		type:objc.attributes.type,
	       		attention:objc.attributes.attention,
	       		question:objc.attributes.question
	       	}
			$scope.newses.push(temp);
			$scope.$apply();
	        }
	    },
	    error: function(error) {
	    	    console.log(error);
	        alert("查询失败: " + error.code + " " + error.message);
	    }
});	
    
    
    
    
    
    
        
   
    
    
    
    //分类新闻内容渲染
    var News = Bmob.Object.extend('news');
	var query = new Bmob.Query(News);
	
	//头条分类
	
	    $scope.arr = [];
		query.equalTo("newsClass", 1);
		query.find({
	    success:function(results) {
//	       	console.log("共查询到 " + results.length + " 条记录");
	        // 循环处理查询到的数据
	        for (var i = 0; i < results.length; i++) {
	        var objc = results[i];
			var temp={
	       		title:objc.attributes.newsTitle,
	       		img:objc.attributes.newsImg,
	       		id:objc.attributes.newsId,
	       		content:objc.attributes.newsContent
	       	}
			$scope.arr.push(temp);
			$scope.$apply();
	        }
	    },
	    error: function(error) {
	    	    console.log(error);
	        alert("查询失败: " + error.code + " " + error.message);
	    }
	   
});	
//  $http.get('./json/newsTop.json')
//	success:(function(obj){
//		$scope.newses=obj.result;
//		
//	});
	
	
	$scope.narr = [
		{'index':3,'text':'头条','href':'/news.news1'},
		{'index':4,'text':'军事','href':'/news.news2'},
		{'index':5,'text':'科技','href':'/news.news3'},
		{'index':6,'text':'娱乐','href':'/news.news4'},		
		{'index':7,'text':'时尚','href':'/news.news5'},
		{'index':8,'text':'体育','href':'/news.news6'},
		{'index':9,'text':'其他','href':'/news.news7'},
//		{'index':10,'text':'科技','href':'/news.news8'},
//		{'index':11,'text':'时尚','href':'/news.news9'},
//		{'index':12,'text':'体育','href':'/news.news10'},
//		{'index':13,'text':'其他','href':'/news.news1'}
	];
	
	
	//军事分类
	
		$scope.arr2 = [];
		query.equalTo("newsClass", 2);
		query.find({
	    success:function(results) {
//	       	console.log("共查询到 " + results.length + " 条记录");
	        // 循环处理查询到的数据
	        for (var i = 0; i < results.length; i++) {
	        var objc = results[i];
			var temp={
	       		title:objc.attributes.newsTitle,
	       		img:objc.attributes.newsImg,
	       		id:objc.attributes.newsId,
	       		content:objc.attributes.newsContent
	       	}
			$scope.arr2.push(temp);
			$scope.$apply();
	        }
	    },
	    error: function(error) {
	    	    console.log(error);
	        alert("查询失败: " + error.code + " " + error.message);
	    }
});	

   //科技分类
		$scope.arr3 = [];
		query.equalTo("newsClass", 3);
		query.find({
	    success:function(results) {
//	       	console.log("共查询到 " + results.length + " 条记录");
	        // 循环处理查询到的数据
	        for (var i = 0; i < results.length; i++) {
	        var objc = results[i];
			var temp={
	       		title:objc.attributes.newsTitle,
	       		img:objc.attributes.newsImg,
	       		id:objc.attributes.newsId,
	       		content:objc.attributes.newsContent
	       	}
			$scope.arr3.push(temp);
			$scope.$apply();
	        }
	    },
	    error: function(error) {
	    	    console.log(error);
	        alert("查询失败: " + error.code + " " + error.message);
	    }
});	

//娱乐分类
        $scope.arr4 = [];
		query.equalTo("newsClass", 4);
		query.find({
	    success:function(results) {
//	       	console.log("共查询到 " + results.length + " 条记录");
	        // 循环处理查询到的数据
	        for (var i = 0; i < results.length; i++) {
	        var objc = results[i];
			var temp={
	       		title:objc.attributes.newsTitle,
	       		img:objc.attributes.newsImg,
	       		id:objc.attributes.newsId,
	       		content:objc.attributes.newsContent
	       	}
			$scope.arr4.push(temp);
			$scope.$apply();
	        }
	    },
	    error: function(error) {
	    	    console.log(error);
	        alert("查询失败: " + error.code + " " + error.message);
	    }
});	


      //时尚分类
        $scope.arr5 = [];
		query.equalTo("newsClass", 5);
		query.find({
	    success:function(results) {
//	       	console.log("共查询到 " + results.length + " 条记录");
	        // 循环处理查询到的数据
	        for (var i = 0; i < results.length; i++) {
	        var objc = results[i];
			var temp={
	       		title:objc.attributes.newsTitle,
	       		img:objc.attributes.newsImg,
	       		id:objc.attributes.newsId,
	       		content:objc.attributes.newsContent
	       	}
			$scope.arr5.push(temp);
			$scope.$apply();
	        }
	    },
	    error: function(error) {
	    	    console.log(error);
	        alert("查询失败: " + error.code + " " + error.message);
	    }
});	
	
	
	
	//体育分类
        $scope.arr6 = [];
		query.equalTo("newsClass", 6);
		query.find({
	    success:function(results) {
//	       	console.log("共查询到 " + results.length + " 条记录");
	        // 循环处理查询到的数据
	        for (var i = 0; i < results.length; i++) {
	        var objc = results[i];
			var temp={
	       		title:objc.attributes.newsTitle,
	       		img:objc.attributes.newsImg,
	       		id:objc.attributes.newsId,
	       		content:objc.attributes.newsContent
	       	}
			$scope.arr6.push(temp);
			$scope.$apply();
	        }
	    },
	    error: function(error) {
	    	    console.log(error);
	        alert("查询失败: " + error.code + " " + error.message);
	    }
});	



//其他分类
        $scope.arr7 = [];
		query.equalTo("newsClass", 7);
		query.find({
	    success:function(results) {
//	       	console.log("共查询到 " + results.length + " 条记录");
	        // 循环处理查询到的数据
	        for (var i = 0; i < results.length; i++) {
	        var objc = results[i];
			var temp={
	       		title:objc.attributes.newsTitle,
	       		img:objc.attributes.newsImg,
	       		id:objc.attributes.newsId,
	       		content:objc.attributes.newsContent
	       	}
			$scope.arr7.push(temp);
			$scope.$apply();
	        }
	    },
	    error: function(error) {
	    	    console.log(error);
	        alert("查询失败: " + error.code + " " + error.message);
	    }
});	



//详情页渲染
$scope.details = function (id) {
		var a = id;
		var news = Bmob.Object.extend('news');
		var query = new Bmob.Query(news); 
        $scope.detail = [];
		query.equalTo("newsId", a);
		query.find({
	    success:function(results) {
	       	console.log("共查询到 " + results.length + " 条记录");
	        // 循环处理查询到的数据
	        for (var i = 0; i < results.length; i++) {
	        var objc = results[i];
			var temp2={
	       		title:objc.attributes.newsTitle,
	       		img:objc.attributes.newsImg,
	       		img1:objc.attributes.newsImg1,
	       		img2:objc.attributes.newsImg2,
	       		content:objc.attributes.newsContent,
	       		content1:objc.attributes.newsContent1,
	       		content2:objc.attributes.newsContent2
	       	}
//			console.log(temp2);
			window.location.href="news/details.html?id="+a;
			$scope.detail.push(temp2); 	
			$scope.$apply();
	        }
	    },
	    error: function(error) {
	    	    console.log(error);
	        alert("查询失败: " + error.code + " " + error.message);
	    }
});	
        };

}])

app.controller('detailsCtrl',['$scope',function($scope){
	
}]);

