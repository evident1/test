$(function(){
    //-----------------完成表单验证--------------------
    //layui是全局对象
    //获取表单对象layui
    var form = layui.form
    //如果纯手工实现表单验证较繁琐，可以利用layui进行表单验证
    // form.verify()

    //基于layui自定义表单验证规则
    form.verify({
        //必须是6-8位字符
        uname:[/^[\S]{6,8}$/,'用户名必须是6-8位字符'],
        //密码必须是数字
        pwd:function(value,item){
            //形参value表示对应输入域的值
            //item表示DOM元素
            //验证6位数字
            var reg = /^\d{6}$/
            console.log(value);
            //如果规则不匹配，就返回提示
            if(!reg.test(value)){
                return  '密码必须是6位数字 '
            }
        }
    
    })

    //-----------------表单内容获取+提交到后台---------------------
    //提交表单
   $('.layui-form').submit(function(e){
       //阻止默认提交行为
       e.preventDefault()
       //获取得到输入的用户名和密码
       //username=er%20&password=21324
        var formData = $(this).serialize()
        console.log(formData);
        //调用后台接口验证是否正确提交
        $.ajax({
            type:'post',
            url:'http://ajax.frontend.itheima.net/api/login',
            data:formData,
            success:function(res){
                //登录成功后跳转
                if(status === 0){
                    location.href = './index.html'
                }
            }
        })

   })
})