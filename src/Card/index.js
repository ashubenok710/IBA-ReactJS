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
    isReadOnly: false,
    initHeader: this.props.headerText,
    initText: this.props.children,
  };

  changeMethod() {
    console.log("Card: changeMethod");
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

  headerChange = (e) =>
    this.setState({
      initHeader: e.target.value,
    });

  textChange = (e) =>
    this.setState({
      initText: e.target.value,
    });

  render() {
    const { checked, isEdit, initHeader, initText } = this.state;
    const {
      className,
      readOnly,
      number,
      headerText,
      children,
      onSetCard,
    } = this.props;

    return (
      <div
        className={classNames("card", className, {
          "card-checked": this.state.checked,
        })}
      >
        {isEdit ? (
          <>
            <span className="absolute pen" onClick={this.toogleEditMethod}>
              {!readOnly && (
                <>
                  <FaSave
                    onClick={() => onSetCard(number, initHeader, initText)}
                  />
                  <GiCancel
                    onClick={() =>
                      this.setState({
                        initHeader: headerText,
                        initText: children,
                      })
                    }
                  />
                </>
              )}
            </span>

            <div className="card-header">
              <textarea
                className="narrow-input"
                value={initHeader}
                onChange={this.headerChange}
              />
            </div>
            <div>
              <textarea
                className="narrow-input"
                value={initText}
                onChange={this.textChange}
              />
            </div>
          </>
        ) : (
          <>
            {!readOnly && (
              <span className="absolute pen" onClick={this.toogleEditMethod}>
                <BsPen />
              </span>
            )}

            <span className="absolute checkbox">
              <StatelessCheckbox
                checked={checked}
                onChange={this.changeMethod}
              />
            </span>
            <div className="card-header">{headerText}</div>
            <div className="text">{children}</div>
          </>
        )}
      </div>
    );
  }
}

export default Card;
