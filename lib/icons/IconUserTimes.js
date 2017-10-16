import * as React from "react";
class IconUserTimes extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--user-times ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M13.7 20q-3.1 0-5.3-2.2t-2.2-5.3 2.2-5.2 5.3-2.2 5.2 2.2 2.2 5.2-2.2 5.3-5.2 2.2zm20.9 6.2l4.8 4.8q.2.2.2.5 0 .2-.2.4l-2.6 2.7q-.2.1-.5.1-.2 0-.4-.1l-4.8-4.9-4.9 4.9q-.2.1-.4.1-.3 0-.4-.1l-2.7-2.7q-.2-.2-.2-.4 0-.3.2-.5l4.8-4.8-4.8-4.8q-.2-.2-.2-.5 0-.2.2-.4l2.6-2.6q.2-.2.5-.2.2 0 .4.2l4.9 4.8 4.8-4.8q.2-.2.4-.2.3 0 .5.2l2.6 2.6q.2.2.2.4 0 .3-.2.5zm-9.7 0l-3.5 3.5q-.7.7-.7 1.8 0 1 .7 1.7l1.6 1.6q-.4.1-.9.1H5.2q-2.4 0-3.8-1.3T0 29.9q0-1 .1-2t.2-2.1.6-2.2.8-1.8 1.2-1.6 1.7-1.1 2.1-.3q.4 0 .8.3 3 2.4 6.2 2.4t6.2-2.4q.3-.3.7-.3.6 0 1.1.1-.5.5-.8.9t-.2 1.1q0 1.1.7 1.8z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconUserTimes.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconUserTimes;
//# sourceMappingURL=IconUserTimes.js.map