import * as React from "react";
class IconGetPocket extends React.Component {
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
                    React.createElement("path", { d: "M35.9 2.9q1.5 0 2.5 1t1 2.4v11.6q0 4-1.5 7.5t-4.1 6.2-6.1 4-7.5 1.5q-3.9 0-7.5-1.5t-6.1-4-4.1-6.2T1 17.9V6.3q0-1.4 1-2.4t2.5-1h31.4zM20.2 26.6q1.1 0 1.8-.7l9.1-8.7q.8-.8.8-1.9 0-1.1-.8-1.9t-1.8-.7q-1.1 0-1.9.7l-7.2 6.9-7.2-6.9q-.8-.7-1.8-.7-1.1 0-1.9.7t-.7 1.9q0 1.2.8 1.9l9 8.7q.7.7 1.8.7z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconGetPocket.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconGetPocket;
//# sourceMappingURL=IconGetPocket.js.map