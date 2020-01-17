import React, { Component } from "react";
import "./App.css";
import dt from "./resume.json";
import { SocialIcon } from "react-social-icons";
import Fp from "./Fp.js";
import { Link, Element } from "react-scroll";
import Menu from "./menu";
import SnowStorm from "react-snowstorm";

class pageload extends Component {
  state = {
    cl: "a",
    cln: 1
  };

  render() {
    let temlist = ["a", "b"];

    return (
      <div className="maindiv">
        <img
          src="pantone.png"
          className="pant"
          onClick={() => {
            let nm = (this.state.cln + 1) % temlist.length;
            console.log(nm);
            let temletter = temlist[nm];
            console.log(temletter);
            this.setState({
              cl: temletter,
              cln: nm
            });
          }}
        />
        <Menu></Menu>

        <div>
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onSetActive={this.handleSetActive}
          >
            <img src="down.png" className="downicon" />
          </Link>
        </div>
        <div className={this.state.cl + "1"}>
          <SnowStorm followMouse="False" />
          <h1 className="title">{dt.title}</h1>
          <h2 className="subtitle">{dt.subtitle}</h2>
          <div>
            {Object.keys(dt.links).map(key => {
              return <SocialIcon url={dt.links[key]} className="icon" />;
            })}
          </div>
        </div>

        <Element name="test1" className="element"></Element>
        {Object.keys(dt.section).map(key => {
          return (
            <Fp
              cl={this.state.cl + dt.section[key].color}
              tit={dt.section[key].title}
              cn={dt.section[key].cnt}
              lin=""
              ln={dt.section[key].color}
            />
          );
        })}
      </div>
    );
  }
}
export default pageload;
