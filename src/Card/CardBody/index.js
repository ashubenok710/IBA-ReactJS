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
  };

  render() {
    const { readOnly, number, headerText, text, onSetCard } = this.props;

    const { checked, isEdit, initText } = this.state;

    /*console.log("CardBody props:", this.props);
    console.log("CardBody state:", this.state);
*/
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
            <div className="text">{this.props.children}</div>
          </>
        )}
      </div>
    );
  }
}

export default CardBody;
