app.controller('mineCtrl',['$scope',function($scope){
	
}]);

app.controller('mine7Ctrl',['$scope',function($scope){
	
}]);

app.controller('mine8Ctrl',['$scope',function($scope){
	
}]);

app.controller('mine9Ctrl',['$scope',function($scope){
	
}]);

app.controller('loginCtrl',['$scope',function($scope){
	function login(){

		        var name= $("#uersname").val();
		        var pwd = $("#pwd").val();
		
		        if($.trim(name)==""){
		            alert("帐号不能为空！");
		            return;
		        }
		
		         if($.trim(pwd)==""){
		            alert("密码不能为空！");
		            return;
		        }       
		
		       var TestScore = Bmob.Object.extend('testScore');
			   BmobSocketIo.initialize("29c2d86aa49c9f7c390c19edf64d3193");
		       Bmob.initialize("29c2d86aa49c9f7c390c19edf64d3193", "a80fcb32745f604639391937fa61404c");
				
				var query = new Bmob.Query(TestScore);
				// 查询所有数据
				query.find({
				  success: function(results) {
				  	console.log(results)
				    /*console.log("共查询到 " + results.length + " 条记录");*/
				    // 循环处理查询到的数据
				    var sta = false;
				    for (var i = 0; i < results.length; i++) {
				      
				      
				      if((results[i].attributes.pwd == pwd) && (results[i].attributes.username == name)){
				      	sta = true;
				      }
				      
				      
				    }
				    if(sta){
				      	alert('登陆成功！');
				      	window.location.href='index.html';
				      }
				    else{
				    	alert("账号/密码错误！")
				    }
				  },
				  error: function(error) {
				    alert("查询失败: " + error.code + " " + error.message);
				  }
				});
		    }
		
		    $("#send").click(function(){
		
		        login();
		    });
		   
}]);
app.controller('registerCtrl',['$scope',function($scope){
	function sendMsg(){

		        var name1= $("#username1").val();
		        var pwd1 = $("#pwd1").val();
				var pwd2 = $("#pwd2").val();
		        if($.trim(name1)==""){
		            alert("帐号不能为空！");
		            return;
		        }
		
		         if($.trim(pwd1)==""){
		            alert("密码不能为空！");
		            return;
		        }  
		         if(pwd1!==pwd2){
		            alert("两次密码输入不一致！");
		            return;
		        }
				
		       
		       var que = new Bmob.Query(TestScore);
				// 查询所有数据
				que.find({
				  success: function(results) {
				  	console.log(results)
				    /*console.log("共查询到 " + results.length + " 条记录");*/
				    // 循环处理查询到的数据
				    var sta = false;
				    for (var i = 0; i < results.length; i++) { 
					      if(results[i].attributes.username == name1){
					      	sta = true;
					      }   
				    }
				    if(sta){
				      	alert('账号已存在！')
				      }
				    else{
				    	var testScore = new TestScore();
						testScore.set("username", $("#username1").val());
						testScore.set("pwd", $("#pwd1").val());
						
						//添加数据，第一个入口参数是null
						testScore.save(null, {
						  success: function(gameScre) {
						    // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
						    alert('注册成功！');
						    window.history.back();
						  },
						  error: function(description, error) {
						    // 添加失败
						    alert('添加数据失败，返回错误信息：' + error.description);
						  }
						});  
				    }
				  },
				  error: function(error) {
				    alert("查询失败: " + error.code + " " + error.message);
				  }
				});
				 
		    }
		
		    $("#send1").click(function(){
		        sendMsg();
		    });
		    
		    var TestScore = Bmob.Object.extend('testScore');
			BmobSocketIo.initialize("29c2d86aa49c9f7c390c19edf64d3193");
		    Bmob.initialize("29c2d86aa49c9f7c390c19edf64d3193", "a80fcb32745f604639391937fa61404c");
}]);
app.controller('mine-setCtrl',['$scope',function($scope){
	
        var div2=document.getElementById("mine-set-btn2");
        var div1=document.getElementById("mine-set-btn1");
        div2.onclick=function(){
          div1.className=(div1.className=="close1")?"open1":"close1";
          div2.className=(div2.className=="close2")?"open2":"close2";
        }
        
        var div4=document.getElementById("mine-set-btn4");
        var div3=document.getElementById("mine-set-btn3");
        div3.onclick=function(){
          div3.className=(div3.className=="close1")?"open1":"close1";
          div4.className=(div4.className=="close2")?"open2":"close2";
        }
        
        var div6=document.getElementById("mine-set-btn6");
        var div5=document.getElementById("mine-set-btn5");
        div5.onclick=function(){
          div5.className=(div5.className=="close1")?"open1":"close1";
          div6.className=(div6.className=="close2")?"open2":"close2";
        }
        
        var div8=document.getElementById("mine-set-btn8");
        var div7=document.getElementById("mine-set-btn7");
        div7.onclick=function(){
          div7.className=(div7.className=="close1")?"open1":"close1";
          div8.className=(div8.className=="close2")?"open2":"close2";
        }
        
   
}])

app.controller('mine-walletCtrl',['$scope',function($socpe){
	
}])