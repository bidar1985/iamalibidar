import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import dt from "./resume.json";
import Itens from "./itens";
import itens from "./itens";
class Fp extends Component {
  render() {
    function Getitem(props) {
      const tp = props.tp;
      if (tp == "Skills") {
        return (
          <div>
            {Object.keys(dt.Skills).map(key => {
              return (
                <Itens
                  cl="items"
                  title={dt.Skills[key].title}
                  icon={dt.Skills[key].icon}
                />
              );
            })}
          </div>
        );
      }
      if (tp == "Experience") {
        return (
          <div>
            {Object.keys(dt.experience).map(key => {
              return (
                <Itens
                  cl="items2"
                  title={dt.experience[key].title}
                  icon={dt.experience[key].icon}
                />
              );
            })}
          </div>
        );
      }
      if (tp != "Projects" && tp != "Experience") {
        return <div></div>;
      }
    }
    return (
      <div className={this.props.cl}>
        <Element name={"test" + this.props.ln} className="element"></Element>
        <div className={this.props.cl}>
          <h1 className="title">{this.props.tit}</h1>
          <div className="pp">{this.props.cn}</div>
          <Getitem tp={this.props.tit} />
        </div>
      </div>
    );
  }
}
export default Fp;
