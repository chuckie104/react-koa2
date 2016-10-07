import React,{Component} from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { Router, Route, hashHistory,Link } from 'react-router';

export default class Login extends Component{
  constructor(props){
    super(props);

  }
  handleClick(){
      var oPhone =this.refs.phone.value;
      var oPassword=this.refs.password.value;
      $.ajax({
				url: 'http://localhost:3000/api/register',
				type: 'post',
				dataType: 'json',
				data: {phone:oPhone,password:oPassword},
        success:function(data){
            if(data.status=="1"){
              hashHistory.push("/login");
            }else{
              alert("用户已存在")
            }
        },error:function(err){

        }
			})
  }
  render(){
    return(
      <div>
        <div className="input-group">
            <span className="input-group-addon">手机号码:</span>
            <input type="text" className="form-control" placeholder="phone" ref="phone"/ >
        </div>
        <div className="input-group">
            <span className="input-group-addon">登录密码:</span>
            <input type="text" className="form-control" placeholder="password" ref="password"/>
        </div>
        <div className="btn-group">
        <button type="button" className="btn btn-default" onClick={()=>this.handleClick()}>注册</button>
        <Link to="/login"><button type="button" className="btn btn-default">直接登录</button></Link>
        </div>
      </div>
    )

  }
}
