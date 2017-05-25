$(function () {


//rem
    function set_font() {
        // 计算、转换布局单位
        var html = document.getElementsByTagName('html')[0];
        var designFontSize = 100,
            designWidth = 750;

        function setFontSize() {
            var winWidth = document.documentElement.getBoundingClientRect().width;
            var fontSize = winWidth / designWidth * designFontSize;

            html.style.fontSize = fontSize + 'px';
        }

        setFontSize();
        window.addEventListener('resize', function () {
            setFontSize();
        });

        return this;
    }

    set_font()

//提示框
    $.oppo = function (msg, time, callback) {
        var html = '<div class="oppo">' + msg + '</div>';
        $('body').append(html);
        setTimeout(function () {
            $('.oppo').remove()
            if (typeof (callback) == 'function') {
                callback()
            } else {

            }
        }, time * 1000)
    }


})


//文字伸缩
function shensuo(element) {
    var $element = $(element);
    var _height = $element.siblings('p').children('.shensuotext').height()
    if (_height <= 70) {
        $(element).hide();
    } else {
        $(element).on('click', function () {
            console.log(_height);
            $(this).prev().toggleClass('log');
            $(this).toggleClass('up');
        })
    }

}
function CountDown(obj) {
    var t = 60;
    var timer = setInterval(function () {
        if (t == 0) {
            obj.val('获取验证码');
            clearInterval(timer);
        } else {
            obj.val(t + '秒后重发');
            obj.attr("disabled", true);
            t--;
        }

    }, 1000)
}

