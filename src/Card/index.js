import React, { Component } from "react";
import "./Card.css";
import classNames from "classnames/bind";
import StatelessCheckbox from "../StatelessCheckbox/index.js";

import { BsPen } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.changeMethod = this.changeMethod.bind(this);
    this.toogleEditMethod = this.toogleEditMethod.bind(this);
  }

  state = {
    checked: false,
    isEdit: false,
    initHeader: "",
    initText: "",
  };

  componentDidMount() {
    this.setState({
      initHeader: this.props.headerText,
      initText: this.props.children,
    });
  }

  changeMethod() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  toogleEditMethod() {
    this.setState({
      isEdit: !this.state.isEdit,
      checked: false,
    });
  }

  headerChange = (e) => {
    this.setState({
      initHeader: e.target.value,
    });
  };

  textChange = (e) =>
    this.setState({
      initText: e.target.value,
    });

  render() {
    const { checked, isEdit, initHeader, initText } = this.state;
    const { className, headerText, children, onSetCard } = this.props;

    var cardStyle = classNames("card", className, {
      "card-checked": this.state.checked,
    });

    return (
      <div className={cardStyle}>
        {isEdit ? (
          <>
            <span className="absolute pen" onClick={this.toogleEditMethod}>
              <FaSave onClick={() => onSetCard(initHeader, initText)} />
              <GiCancel
                onClick={() =>
                  this.setState({ initHeader: headerText, initText: children })
                }
              />
            </span>

            <div className="card-header">
              <input
                className="narrow-input"
                value={initHeader}
                onChange={this.headerChange}
              />
            </div>
            <div>
              <input
                className="narrow-input"
                value={initText}
                onChange={this.textChange}
              />
            </div>
          </>
        ) : (
          <>
            <span className="absolute pen" onClick={this.toogleEditMethod}>
              <BsPen />
            </span>
            <span className="absolute checkbox">
              <StatelessCheckbox
                checked={checked}
                onChange={this.changeMethod}
              />
            </span>
            <div className="card-header">{headerText}</div>
            <div>{children}</div>
          </>
        )}
      </div>
    );
  }
}

export default Card;
