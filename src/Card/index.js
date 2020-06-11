import React, { Component } from "react";
import "./Card.css";
import classNames from "classnames/bind";
import StatelessCheckbox from "../StatelessCheckbox/index.js";

import { BsPen } from "react-icons/bs";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.changeMethod = this.changeMethod.bind(this);
    this.toogleEditMethod = this.toogleEditMethod.bind(this);
  }

  state = {
    checked: false,
    isEdit: false,
  };

  changeMethod() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  toogleEditMethod() {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }

  render() {
    const { checked, isEdit } = this.state;
    const { className, headerText, children, onHeaderChange } = this.props;

    var cardClass = classNames("card", className, {
      "card-checked": this.state.checked,
    });

    return (
      <div className={cardClass}>
        {/* alternate approach  </div><div className={`card ${checked ? "card-styled" : ""}`}>  */}
        <span className="absolute pen" onClick={this.toogleEditMethod}>
          <BsPen />
        </span>
        <span className="absolute checkbox">
          <StatelessCheckbox checked={checked} onChange={this.changeMethod} />
        </span>

        {isEdit ? (
          <>
            <div className="card-header">
              <input value={headerText} onChange={onHeaderChange} />
            </div>
            <div>{children}</div>
          </>
        ) : (
          <>
            <div className="card-header">{headerText}</div>
            <div>{children}</div>
          </>
        )}
      </div>
    );
  }
}

export default Card;
