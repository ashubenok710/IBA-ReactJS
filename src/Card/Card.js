import React, { Component } from "react";
import "./Card.css";
import classNames from "classnames/bind";
import StatelessCheckbox from "../StatelessCheckbox/index.js";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

class Card extends React.Component {
  constructor(props) {
    super(props);
    //this.changeMethod = this.changeMethod.bind(this);
    //this.toogleEditMethod = this.toogleEditMethod.bind(this);
    this.headerChange = this.headerChange.bind(this);
  }

  state = {
    initHeader: this.props.headerText,
    initText: this.props.children,
  };

  componentDidUpdate(prevProps) {
    const { readOnly, headerText, children } = this.props;
    const { isEdit } = this.state;
    if (!prevProps.readOnly && readOnly && isEdit) {
      this.setState({
        initHeader: headerText,
        initText: children,
      });
    }
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
    const {
      number,
      className,
      readOnly,
      checked,
      headerText,
      onSetCard,
      children,
    } = this.props;

    const { initText } = this.state;

    console.log("Card props:", this.props);
    console.log("Card state:", this.state);

    return (
      <div
        className={classNames("card", className, {
          "card-checked": checked,
        })}
      >
        <CardHeader
          checked={checked}
          readOnly={readOnly}
          headerText={headerText}
          onCheckedChange={() =>
            onSetCard(number, headerText, children, !checked)
          }
        />
        <CardBody children={initText} />
      </div>
    );
  }
}

export default Card;
