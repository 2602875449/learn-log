
//语音输入和键盘输入功能切换
function to_write() {
    $('.wenwen_btn img').attr('src', 'images/yy_btn.png');
    $('.wenwen_btn').attr('onclick', 'to_say()');
    $('.write_box,.wenwen_help button').show();
    $('.circle-button,.wenwen_help a').hide();
    $('.write_box input').focus();
    for_bottom();
}
//语音输入时，移除输入文字的记录
function to_say() {
    $('.write_list').remove();
    $('.wenwen_btn img').attr('src', 'images/jp_btn.png');
    $('.wenwen_btn').attr('onclick', 'to_write()');
    $('.write_box,.wenwen_help button').hide();
    $('.circle-button,.wenwen_help a').show();
}
//发送问题
function up_say() {
    $('.write_list').remove();
    var text = $('.write_box input').val(),
        str = '<div class="question">';
    str += '<div class="heard_img right"><img src="images/dglvyou.jpg"/></div>';
    str += '<div class="question_text clear"><p>' + text + '</p><i></i>';
    str += '</div></div>';

    if (text == '') {
        alert('请输入提问！');
        $('.write_box input').focus();
    } else {
        $('.speak_box').append(str);
        $('.write_box input').val('');
        $('.write_box input').focus();
        autoWidth();
        for_bottom();
        setTimeout(function () {
            var ans = '<div class="answer"><div class="heard_img left"><img src="images/dglvyou.jpg"/></div>';
            ans += '<div class="answer_text"><p>您发送的文字是：' + text + '</p><i></i>';
            ans += '</div></div>';
            $('.speak_box').append(ans);
            for_bottom();
        }, 1000);
    }
}
//键盘输入问题
function keyup() {
    var footer_height = $('.wenwen-footer').outerHeight(),
        text = $('.write_box input').val(),
        str = '<div class="write_list">' + text + '</div>';
    if (text == '' || text == undefined) {
        $('.write_list').remove();
    } else {
        $('.typein').append(str);
    }
}

var wen = document.getElementById('wenwen');
function _touch_start(event) {
    event.preventDefault();
    $('.wenwen_text').css('background', '#c1c1c1');
    $('.wenwen_text span').css('color', '#fff');
    $('.saying').show();
}
//发送语音和恢复语音消息
function _touch_end(event) {
    event.preventDefault();
    $('.wenwen_text').css('background', '#fff');
    $('.wenwen_text .circle-button').css('color', '#666');
    $('.saying').hide();
    var str = '<div class="question">';
    str += '<div class="heard_img right"><img src="images/dglvyou.jpg"/></div>';
    str += '<div class="question_text clear"><p>不好意思，我听不清！</p><i></i>';
    str += '</div></div>';
    $('.speak_box').append(str);
    for_bottom();
    setTimeout(function () {
        var ans = '<div class="answer"><div class="heard_img left"><img src="images/dglvyou.jpg"/></div>';
        ans += '<div class="answer_text"><p>我不知道你在说什么?</p><i></i>';
        ans += '</div></div>';
        $('.speak_box').append(ans);
        for_bottom();
    }, 1000);
}

wen.addEventListener("touchstart", _touch_start, false);
wen.addEventListener("touchend", _touch_end, false);
//设置聊天界面的高度
function for_bottom() {
    var speak_height = $('.speak_box').height();
    $('.speak_box,.speak_window').animate({scrollTop: speak_height}, 500);
}

function autoWidth() {
    $('.question_text').css('max-width', $('.question').width() - 60);
}
autoWidth();