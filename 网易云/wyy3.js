/*点击弹出按钮*/
function loginBox() {
    var loginBox = document.getElementById("loginBox");
    var notLogin = document.getElementById("notLogin");
    loginBox.style.display = "block";
    notLogin.style.display = "block";
};

/*点击关闭按钮*/
function closeBox() {
    var loginBox = document.getElementById("loginBox");
    var notLogin = document.getElementById("notLogin");
    loginBox.style.display = "none";
    notLogin.style.display = "none";
}


//登录1
// function ShowLoginText() {
//     layer.open({
//         type: 1,
//         title: "登录",
//         area: ["395px", "300px"],
//         content: $("#loginBox"),
//     });
// }
// function Login() {
//     var username = $.trim($("#InputUsername").val());//获取用户名trim是去掉空格
//     var password = $.trim($("#InputUserPwd").val());//获取密码
//     if (username == "" || password == "") {
//         layer.alert("用户名或者密码不能为空!", {
//             title: "提示",
//             icon: 5,
//         });
//     }
// }
// //登录2
// var vue = new Vue({
//     el: '#app',
//     data: {
//         loginInfo: {}//登录信息
//     },
//     methods: {
//         //发送验证码
//         sendValidateCode() {
//             //获取用户输入的手机号
//             var telephone = this.loginInfo.telephone;
//             //调用js方法，校验输入的手机号是否合法
//             if (!checkTelephone(telephone)) {
//                 //校验不通过，提示错误信息
//                 this.$message.error("请输入正确的手机号");
//                 return false;
//             }
//             //在按钮上显示30秒倒计时效果
//             validateCodeButton = $("#validateCodeButton")[0];//锁定dom对象
//             clock = window.setInterval(doLoop, 1000);//定时器方法，可以实现每隔指定的时间调用指定的方法
//             //发送ajax请求，为用户发送手机验证码
//             axios.post("/validateCode/send4Login.do?telephone=" + telephone).then((res) => {
//                 if (!res.data.flag) {
//                     //短信验证码发送失败
//                     this.$message.error(res.data.message);
//                 }
//             });
//         },
//         //登录
//         login() {
//             //为了防止在输入验证码后手机号更换了或者删除了，发送无效请求，所以这里还要再对手机号进行校验
//             //获取用户输入的手机号
//             var telephone = this.loginInfo.telephone;
//             //调用js方法，校验输入的手机号是否合法
//             if (!checkTelephone(telephone)) {
//                 //校验不通过，提示错误信息
//                 this.$message.error("请输入正确的手机号");
//                 return false;
//             }
//             //发送ajax请求，将表单数据提交到Controller进行登录处理
//             axios.post("/member/login.do", this.loginInfo).then((res) => {
//                 if (res.data.flag) {
//                     //登录成功，跳转到会员首页
//                     window.location.href = "member.html";
//                 } else {
//                     this.$message.error(res.data.message);
//                 }
//             });
//         }
//     }
// });


/*-----------------轮播-----------------*/
window.onload = function () {
    var pic = document.getElementById('pic');
    var pic_inner = document.getElementById('pic_inner');
    var pic_dots = document.getElementById('pic_dots').getElementsByTagName('span');
    var pic_prev = document.getElementById('pic_prev');
    var pic_next = document.getElementById('pic_next');
    var index = 1;
    var len = 3;
    var animated = false;
    var interval = 3240;
    var timer;


    function animate(offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset / (time / inteval);
        var left = parseInt(pic_inner.style.left) + offset;

        var go = function () {
            if ((speed > 0 && parseInt(pic_inner.style.left) < left) || (speed < 0 && parseInt(pic_inner.style.left) > left)) {
                pic_inner.style.left = parseInt(pic_inner.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                pic_inner.style.left = left + 'px';
                if (left > -200) {
                    pic_inner.style.left = -1080 * len + 'px';
                }
                if (left < (-1080 * len)) {
                    pic_inner.style.left = '-1080px';
                }
                animated = false;
            }
        }
        go();
    }

    function showButton() {
        for (var i = 0; i < pic_dots.length; i++) {
            if (pic_dots[i].className == 'on') {
                pic_dots[i].className = '';
                break;
            }
        }
        pic_dots[index - 1].className = 'on';
    }

    function play() {
        timer = setTimeout(function () {
            pic_next.onclick();
            play();
        }, interval);
    }
    function stop() {
        clearTimeout(timer);
    }

    pic_next.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 3) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-1080);
        showButton();
    }
    pic_prev.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 3;
        }
        else {
            index -= 1;
        }
        animate(1080);
        showButton();
    }

    for (var i = 0; i < pic_dots.length; i++) {
        pic_dots[i].onclick = function () {
            if (animated) {
                return;
            }
            if (this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -1080 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        }
    }

    pic.onmouseover = stop;
    pic.onmouseout = play;

    play();

}





//API中的调用
/*const { login_cellphone, user_cloud } = require('NeteaseCloudMusicApi')
async function main() {
    try {
        const result = await login_cellphone({
            phone: '手机号',
            password: '密码'
        })
        console.log(result)
        const result2 = await user_cloud({
            cookie: result.body.cookie // 凭证
        })
        console.log(result2.body)

    } catch (error) {
        console.log(error)
    }
}
main()*/