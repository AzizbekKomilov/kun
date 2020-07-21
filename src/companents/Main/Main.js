
import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../home/home";
import Jahon from "../jahon/Jahon";
import Sport from "../sport/sport";
import Texnologiya from "../texnologiya/texnologiya";
import Uzbek from "../Uzbek/uzbek";

const Main = () => {
   return (
       <div>
          <div>
             <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/jahon" component={Jahon}/>
                <Route path="/texnologiya" component={Texnologiya}/>
                <Route path="/sport" component={Sport}/>
                <Route path="/uzbek" component={Uzbek} />
             </Switch>
          </div>
       </div>
   );
};
export default Main;
