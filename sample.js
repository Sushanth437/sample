function func1(){
    $("p").css('color', 'red');
    // document.querySelector
}

function fun2(){
    $("#img1").fadeToggle();
}
function fun3(){
    // $("div").css('background-color','yellow');
    // $(".para").css('font-style','italic');
    // $(".para").css('color','blue');
    // $(".para1").css('font-weight','bold');
    // $(".para1").css('color','red');
    // //$(".para,.para1").css('font-style','italic');
    // $("div>p").fadeToggle();
    // $("p:first").fadeToggle();
    // $("li:even").fadeToggle();
    $("li:odd").fadeToggle();
}
$("button").click(fun4);
function fun4(){
    $("#img2").css('width','500px');
}