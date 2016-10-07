import React,{Component} from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { Router, Route, hashHistory } from 'react-router';

export default class Login extends Component{
  constructor(props){
    super(props);
  }
  handleClick(){
      var oPhone =this.refs.phone.value;
      var oPassword=this.refs.password.value;
      $.ajax({
				url: 'http://localhost:3000/api/login',
				type: 'post',
				dataType: 'json',
				data: {phone:oPhone,password:oPassword},
        success:function(data){
            if(data.status=="1"){
              hashHistory.push("/signin-ok");
            }else if(data.status=="2"){
              alert(data.msg)
            }else if (data.status=="0"){
              alert(data.msg)
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
        <button type="button" className="btn btn-default" onClick={()=>this.handleClick()}>登录</button>
        </div>
      </div>
    )

  }
}
