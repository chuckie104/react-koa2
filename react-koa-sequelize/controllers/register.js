var insertUser = require("../dao/insertUsers");
var selectUser=require("../dao/selectUsers");

var fn_register=async (ctx,next)=>{
    var oPhone =ctx.request.body.phone;
    var oPassword=ctx.request.body.password;

    var object = await selectUser(oPhone);

    var jsonResponse = {};

    console.log(object);
    //手机号已存在的情况
    if(object.length!=0){
      jsonResponse.status="2";
      ctx.response.body=jsonResponse;//我刚才竟然写 return jsonResponse; 哈哈哈哈
      return;
    }

    var padge=await insertUser(oPhone,oPassword);
    
    if(padge){
      jsonResponse.status="1";
    }
      ctx.response.body=jsonResponse;
}

module.exports={
  "POST /api/register":fn_register,
}
