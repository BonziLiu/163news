app.controller('talkCtrl',['$scope','$http',function($scope,$http){
	$scope.talkClick=function(){
		$scope.active=$scope.active=='active'?'none':'active';
		$scope.rows=$scope.rows=='rows'?'none':'rows';
	},
	
	$http.get('./json/talk.json')
	.success(function(req){
//		console.log(req);
		$scope.talkes=req.result;
	})
	
	
	
	
}])











