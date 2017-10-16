import * as React from "react";
class IconStumbleuponCircle extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--stumbleupon-circle ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M22.3 18.7l2-.6v-1.4q0-1.7-1.3-3t-3-1.2-3.1 1.2-1.3 3V23q0 .5-.3.8t-.8.3-.7-.3-.3-.8v-2.6h-3.4v2.7q0 1.8 1.3 3.1t3.1 1.3q1.8 0 3.1-1.3t1.3-3.1v-6.2q0-.4.3-.7t.8-.4q.4 0 .7.4t.3.7v1.2zm7.5 4.4v-2.7h-3.4v2.8q0 .4-.3.7t-.7.3q-.5 0-.8-.3t-.3-.7v-2.8l-2 .6-1.3-.6v2.7q0 1.8 1.3 3.1t3.1 1.3 3.1-1.3 1.3-3.1zm7.5-3.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconStumbleuponCircle.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconStumbleuponCircle;
//# sourceMappingURL=IconStumbleuponCircle.js.map