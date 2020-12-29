import React, { Component } from "react";

import "./CardHeader.css";
import StatelessCheckbox from "../../StatelessCheckbox";

import { BsPen } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

class CardHeader extends React.Component {
  state = {
    checked: false,
    isEdit: false,
    initHeader: this.props.headerText,
  };

  render() {
    const { checked, initHeader, initText } = this.state;

    const {
      isEdit,
      className,
      readOnly,
      number,
      headerText,
      children,
      onSetCard,
    } = this.props;

    return (
      <div>
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
          </>
        )}
      </div>
    );
  }
}

export default CardHeader;
