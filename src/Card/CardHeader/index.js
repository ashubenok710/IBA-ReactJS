import React, { Component } from "react";

import "./CardHeader.css";
import StatelessCheckbox from "../../StatelessCheckbox";

import { BsPen } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

class CardHeader extends React.Component {
  constructor(props) {
    super(props);
    //this.changeMethod = this.changeMethod.bind(this);
    //this.toogleEditMethod = this.toogleEditMethod.bind(this);
  }

  state = {
    initHeader: this.props.headerText,
  };

  render() {
    const {
      isEdit,
      checked,
      readOnly,
      headerText,
      onCheckedChange,
    } = this.props;

    const { initHeader } = this.state;

    console.log("CardHeader props:", this.props);
    console.log("CardHeader state:", this.state);

    return (
      <div>
        {isEdit ? (
          <>
            <span className="absolute pen" onClick={this.toogleEditMethod}>
              {!readOnly && (
                <>
                  {/*<FaSave onClick={() => onSetHeader(number, initHeader)} /> */}
                  <GiCancel
                    onClick={() =>
                      this.setState({
                        initHeader: headerText,
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
              <StatelessCheckbox checked={checked} onChange={onCheckedChange} />
            </span>
            <div className="card-header">{headerText}</div>
          </>
        )}
      </div>
    );
  }
}

export default CardHeader;
