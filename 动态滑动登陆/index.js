//让界面隐藏或显示
$(".show-login").on("click",function (){
	console.log("显示");
    $(".login-box").toggleClass("showed");
});
$(".hide-login").on("click",function (){
	console.log("隐藏");
    $(".login-box").toggleClass("showed");
});