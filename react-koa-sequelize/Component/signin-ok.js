import React,{Component} from "react";

export default class Signin extends Component{
    render(){
      return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Sign in successfully!</h1>
                    <div className="alert alert-success"> <strong>Well done!</strong> You successfully signed in as!
                    </div>
                </div>
            </div>
        </div>
      )
    }
}
