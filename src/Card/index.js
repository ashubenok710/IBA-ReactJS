import React, { Component } from "react";
import StatelessCheckbox from "../StatelessCheckbox/index.js";
import "./Card.css";
import classNames from "classnames/bind";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.changeMethod = this.changeMethod.bind(this);
  }

  state = {
    checked: false,
  };

  changeMethod() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { checked } = this.state;
    var cardClass = classNames("card", this.props.className, {
      "card-checked": this.state.checked,
    });

    return (
      <div className={cardClass}>
        {/* alternate approach  </div><div className={`card ${checked ? "card-styled" : ""}`}>  */}
        <span className="absolute-checkbox">
          <StatelessCheckbox checked={checked} onChange={this.changeMethod} />
        </span>
        <div className="card-header">{this.props.headerText}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
