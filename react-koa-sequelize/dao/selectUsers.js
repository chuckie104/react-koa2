"use strict"

const model = require("../module");

let Pet=model.r_users; //拿到sequelize框架初始化对象对应的表

var selectUser=async (phone)=>{
    var user =await Pet.findAll({
      where:{
        phone:phone
      }
    });

    return user;
}

module.exports=selectUser;
