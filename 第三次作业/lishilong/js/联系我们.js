$(document).ready(function(){
    $(".liuyantubiao").click(function(){
        $(".liuyankuang").css("display","block")
    })
    var a = true
    $("#check").click(function(){
        if(a){
        $(".1").css("display","none")
        a = false
        }
        else{
            $(".1").css("display","initial")
            a = true
        }
    })
    $("#2").click(function(){
        $(".liuyankuang").css("display","none")
    })
})