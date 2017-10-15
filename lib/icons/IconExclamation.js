import * as React from "react";
class IconExclamation extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--exclamation ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M24.4 27.9v5q0 .5-.4 1t-1 .4h-5.7q-.6 0-1-.4t-.4-1v-5q0-.6.4-1t1-.5H23q.6 0 1 .5t.4 1zm.7-23.6l-.6 17.1q0 .6-.5 1t-1 .5h-5.7q-.6 0-1-.5t-.5-1l-.6-17.1q0-.6.4-1t1-.4h7.1q.6 0 1 .4t.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconExclamation.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconExclamation;
//# sourceMappingURL=IconExclamation.js.map