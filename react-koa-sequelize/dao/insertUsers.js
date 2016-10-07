"use strict"

const model = require("../module");

let Pet=model.r_users;

var insertSql=async (phone,password)=>{
  console.log(phone+".."+password);
    var user= await Pet.create({
        phone:phone,
        password:password
    });

    return true;
}

module.exports=insertSql;
