//在這裡寫入你的JS邏輯
// CTRL+/ 註解
// 透過jquer函數(函式)選到class 是 navbar-toggle的元素
// 並設定click事件

// jQuery(".box") //function()功能 裡面寫的是css選擇器
// jQuery("css選擇器")
// jQuery(".box")
// jQuery("a")
//事件處理器
// 小駝峰命名法 singInwithGoogle
// python 命名法sing_in_with
// jQuery→$簡寫

//C-Like語言
// 函式function (){}
jQuery(".navbar-toggler").click(function () {
    //按鈕被點擊後要做的事情...
    console.log("按鈕被點了 !");
    console.log("寫對了")
    $(".navbar-list").toggleClass("active");
});

// 事件
$(".dropdown-btn").click(function () {
    // 按鈕點到的下拉顯示
    console.log("被我點到", this);
    $(".dropdown").removeClass("show");
    $(this).parent().toggleClass("show");
    // $(this).parent().removeClass("show");
});

// 函式:att

