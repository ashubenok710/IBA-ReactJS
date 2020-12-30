import React, { Component } from "react";

import "./CardBody.css";
import StatelessCheckbox from "../../StatelessCheckbox";

import { BsPen } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

class CardBody extends React.Component {
  state = {
    checked: false,
    isEdit: false,
    initHeader: this.props.headerText,
  };

  render() {
    const {
      className,
      readOnly,
      number,
      headerText,
      children,
      onSetCard,
    } = this.props;

    const { checked, isEdit, initHeader, initText } = this.state;

    console.log("CardBody props:", this.props);
    console.log("CardBody state:", this.state);

    return (
      <div>
        {isEdit ? (
          <>
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
            <div className="text">{children}</div>
          </>
        )}
      </div>
    );
  }
}

export default CardBody;
