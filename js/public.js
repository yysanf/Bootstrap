/**
 * Created by a9842 on 2016/11/21.
 */
$(document).ready(function () {
    (function () {
        // 先隐藏固定顶部导航栏
        $('#nav_fixed').hide();
        $(window).scroll(winScroll);
        // 滚动隐藏显示导航栏函数
        function winScroll() {
            var hWidth = parseFloat($('#header').css('height'));
            var winWidth = $(window).scrollTop();
            if (winWidth >= hWidth){
                $('#nav_fixed').addClass('move').show();
            } else {
                $('#nav_fixed').hide().removeClass('move');
            }
        }
        // top按钮点击事件
        $('#to_Top').click(function () {
            $(window).scrollTop(0);
        })
    })();
});


// <=768px导航栏点击改变内容方法
function cgTxt(id,ch,val) {
    this.init(id,ch,val)
}
cgTxt.prototype.init = function (id,ch,val) {
    $(id).click(function () {
        $(id).children(ch).text() == 'Close'? $(id).children(ch).text(val) : $(id).children(ch).text('Close');
    });
};