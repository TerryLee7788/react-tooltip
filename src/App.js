import React from 'react';
import ToolTip from './ToolTip';

function App() {
    return (
        <div
            className="container"
        >
            <div
                className="center"
            >
                <ToolTip
                    render={() => (
                        <div>123</div>
                    )}
                    place="top"
                >
                    tooltip top
                </ToolTip>
            </div>
            <br />
            <div
                className="center"
            >
                <ToolTip
                    render={() => (
                        <div>
                            <div>123</div>
                            <div>123</div>
                            <div>123</div>
                            <div>123</div>
                            <div>123</div>
                            <div>123</div>
                            <div>123</div>
                            <div>123</div>
                            <div>123</div>
                        </div>
                    )}
                >
                    tooltip right
                </ToolTip>
            </div>
            <br />
            <div
                className="center"
            >
                <ToolTip
                    render={() => (
                        <div>123</div>
                    )}
                    place="left"
                >
                    tooltip left
                </ToolTip>
            </div>
            <br />
            <div
                className="center"
            >
                <ToolTip
                    render={() => (
                        <div>123</div>
                    )}
                    place="bottom"
                >
                    tooltip bottom
                </ToolTip>
            </div>
        </div>
    );
}

export default App;
