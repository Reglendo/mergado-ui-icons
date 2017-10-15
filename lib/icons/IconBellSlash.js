import * as React from "react";
class IconBellSlash extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--bell-slash ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M30.2 19.1q1.2 7 5.8 10.8 0 1-.7 1.8t-1.8.7h-8.7q0 2.1-1.4 3.5t-3.5 1.5-3.5-1.5-1.5-3.5zM19.9 35.8q.3 0 .3-.3t-.3-.3q-1.2 0-2-.8t-.8-2q0-.3-.3-.3t-.3.3q0 1.4 1 2.4t2.4 1zm19.4-31q.2.2.2.4t-.2.5L2.9 37.2q-.2.1-.4.1t-.4-.2L.4 35.2q-.1-.2-.1-.4t.2-.5l3.6-3.1q-.4-.6-.4-1.3 1-.8 1.8-1.7t1.6-2.3 1.5-3.1 1-4 .3-5q0-3 2.3-5.5t6-3.1q-.2-.3-.2-.7 0-.8.6-1.4t1.3-.5 1.3.6.5 1.3q0 .4-.1.7 2.4.4 4.2 1.6t2.9 3.1l8.1-7.1q.2-.1.5-.1t.4.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBellSlash.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBellSlash;
//# sourceMappingURL=IconBellSlash.js.map