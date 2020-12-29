import React, { Component } from "react";

class CardBody extends React.Component {
  state = {
    checked: false,
    isEdit: false,
    initHeader: this.props.headerText,
  };

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

            <div className="text">{children}</div>
          </>
        )}
      </div>
    );
  }
}

export default CardBody;
