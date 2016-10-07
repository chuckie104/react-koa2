const db=require("../db");

module.exports=db.defineModel("r_users",{
  phone:db.STRING(255),
  password:db.STRING(255),
});
