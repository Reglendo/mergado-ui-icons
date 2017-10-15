import * as React from "react";
class IconStepForward extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--step-forward ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M9.5 36.9q-.4.4-.7.2t-.3-.7V3.6q0-.6.3-.7t.7.2L25.4 19l.2.4V4.3q0-.6.5-1t1-.4h2.8q.6 0 1 .4t.5 1v31.4q0 .6-.5 1t-1 .4h-2.8q-.6 0-1-.4t-.5-1V20.6l-.2.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconStepForward.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconStepForward;
//# sourceMappingURL=IconStepForward.js.map