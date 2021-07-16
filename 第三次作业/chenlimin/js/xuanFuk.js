$(function(){
    var move = setInterval(moves,1);
    var x= -1;
    var y= -1;
    function moves(){
        var xF = $("#xuanFuk").offset();
        var lefts =xF.left;
        var tops = xF.top;
        if(lefts>=$(window).width()-$("#xuanFuk").width()||lefts<=0)
        {
            x = 0-x;
        }
        if (tops>=$(window).height()-$("#xuanFuk").height()||tops<=0)
        {
            y = 0-y;
        }
        lefts += x;
        tops += y;
        $("#xuanFuk").offset({top:tops,left:lefts});
    }
    $("#xuanFuk").mouseover(function(){
        clearInterval(move);
    });
    $("#xuanFuk").mouseout(function(){
        move = setInterval(moves,1);
    });
});
