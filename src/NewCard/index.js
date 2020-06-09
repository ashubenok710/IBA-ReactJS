import React, { Component } from 'react';

import StatelessCheckbox from '../StatelessCheckbox/index.js';

import './NewCard.css';

class NewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    render() {
        const { checked } = this.state;
        return (
            <div className={`newCard ${checked ? "newCard-styled" : ""}`}>
                <span className="absolute-checkbox">
                    <StatelessCheckbox
                        checked={checked}
                        onChange={() => this.setState({
                            checked: !this.state.checked
                        })
                        }
                    />
                </span>
                <div className="newCard-header">{this.props.headerText}</div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }




}

export default NewCard;