import * as React from "react";
class IconBank extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M19.9 1.4l20 8V12h-2.7q0 .6-.4 1t-1 .4H4.1q-.6 0-1-.4t-.4-1H0V9.4zM5.3 14.7h5.3v15.9h2.7V14.7h5.3v15.9h2.7V14.7h5.3v15.9h2.6V14.7h5.3v15.9h1.3q.6 0 1 .4t.4 1v1.3H2.7V32q0-.6.4-1t1-.4h1.2V14.7zm33.1 19.9q.6 0 1 .4t.5.9v2.7H0v-2.7q0-.5.4-.9t1-.4h37z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBank.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBank;
//# sourceMappingURL=IconBank.js.map