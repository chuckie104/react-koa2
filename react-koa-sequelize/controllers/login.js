var selectUser=require("../dao/selectUsers");

var fn_login=async (ctx,next)=>{
    var oPhone =ctx.request.body.phone;
    var oPassword=ctx.request.body.password;

    var object=await selectUser(oPhone);

    var jsonResponse = {};

    if(object==""||object==undefined){
      jsonResponse.msg="没有此用户";
      jsonResponse.status="0";
      ctx.response.body=jsonResponse;
      return;
    }

    if(object[0].password==oPassword){
      jsonResponse.msg="登录成功";
      jsonResponse.status="1";
    }else{
      jsonResponse.msg="密码错误";
      jsonResponse.status="2";
    }
    ctx.response.body=jsonResponse;
}

module.exports={
  "POST /api/login":fn_login
}
