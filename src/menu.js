import React, { Component } from "react";
import "./App.css";
import dt from "./resume.json";
import { Link, Element } from "react-scroll";

class menu extends Component {
  render() {
    return  <div className="mnbar">
    {Object.keys(dt.section).map(key => {
     return (
         
       <Link className="mnu" activeClass="active" to={'test'+dt.section[key].color} spy={true} smooth={true} offset={0} duration={2000} onSetActive={this.handleSetActive}>
        {dt.section[key].title}
       </Link> 
       );
   })}
</div>;
  }
}
export default menu;
