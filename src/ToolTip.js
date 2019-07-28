import React from 'react';
import './ToolTip.css';

class ToolTips extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            showToolTips: false
        };

        this.timer = null;
        this.hideToolTip = this.hideToolTip.bind(this);
        this.showToolTip = this.showToolTip.bind(this);

    }

    hideToolTip() {

        this.timer = setTimeout(() => {

            this.setState({
                showToolTips: false
            });

        }, 100);

    }

    showToolTip() {

        clearTimeout(this.timer);

        if (this.state.showToolTips) return;

        this.setState({
            showToolTips: true
        });

    }

    render() {

        return (
            <div
                className="tooltipsWrapper"
                onMouseOver={this.showToolTip}
                onMouseLeave={this.hideToolTip}
            >
                <div>
                    {this.props.children}
                </div>
                {
                    this.state.showToolTips
                        ? (
                            <div
                                className={`toolTipe
                ${this.state.showToolTips ? 'active' : ''}
                ${this.props.place ? this.props.place : 'right'} 
							`}

                            >
                                {
                                    this.state.showToolTips
                                        ? (
                                            <div
                                                className="toolTipsContainer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                }}
                                            >
                                                {this.props.render()}
                                            </div>
                                        )
                                        : (null)
                                }
                            </div>
                        )
                        : (null)
                }
            </div>
        );

    }

}

export default ToolTips;
