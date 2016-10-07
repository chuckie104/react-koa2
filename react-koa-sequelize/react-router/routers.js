import { Router, Route,hashHistory} from 'react-router';
import Login from "../Component/login";
import Signin from "../Component/signin-ok";
import Register from "../Component/register";
import React from "react";


var routes=(
  <Router history={hashHistory}>
    <Route path="/login" component={Login}></Route>
    <Route path="/signin-ok" component={Signin}></Route>
    <Route path="/" component={Register}></Route>
  </Router>
)

module.exports=routes;
