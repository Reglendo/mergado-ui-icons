import * as React from "react";
class IconShip extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--ship ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M35.2 32.8q.3-.4.8-.4t.9.4l2.5 2.5-1.8 1.7-1.6-1.6-1.6 1.6q-.3.4-.9.4t-.8-.4l-1.6-1.6-1.7 1.6q-.3.4-.8.4t-.9-.4l-1.6-1.6-1.6 1.6q-.4.4-.9.4t-.9-.4l-1.6-1.6-1.6 1.6q-.4.4-.9.4t-.8-.4l-1.7-1.6-1.6 1.6q-.3.4-.8.4t-.9-.4l-1.6-1.6L9.6 37q-.4.4-.9.4t-.9-.4l-1.6-1.6L4.6 37q-.4.4-.9.4t-.8-.4L.4 34.5l1.7-1.7 1.6 1.6 1.6-1.6q.4-.4.9-.4t.9.4l1.6 1.6 1.6-1.6q.4-.4.9-.4t.9.4l1.6 1.6 1.6-1.6q.3-.4.8-.4t.9.4l1.6 1.6 1.6-1.6q.4-.4.9-.4t.9.4l1.6 1.6 1.6-1.6q.4-.4.9-.4t.9.4l1.6 1.6 1.6-1.6q.4-.4.9-.4t.8.4l1.6 1.6zm-30.6-.7q-.4.3-.9.3t-.8-.3L.4 29.6l1.7-1.8 1.6 1.6 1.6-1.6q.4-.3.9-.3t.9.3l1.6 1.6 1.2-1.2v-5.7l-4-6.1q-.4-.5-.2-1.1t.8-.8l3.4-1.1V7.6h2.5V5.1h5V2.6h5v2.5h4.9v2.5h2.5v5.8l3.4 1.1q.6.2.8.8t-.1 1.1l-4.1 6.1v5.7l.4-.4q.4-.3.9-.3t.8.3l1.6 1.6 1.7-1.6q.3-.3.8-.3t.9.3l2.5 2.5-1.8 1.8-1.6-1.7-1.6 1.7q-.3.3-.9.3t-.8-.3l-1.6-1.7-1.7 1.7q-.3.3-.8.3t-.9-.3l-1.6-1.7-1.6 1.7q-.4.3-.9.3t-.9-.3l-1.6-1.7-1.6 1.7q-.4.3-.9.3t-.8-.3l-1.7-1.7-1.6 1.7q-.3.3-.8.3t-.9-.3l-1.6-1.7-1.6 1.7q-.4.3-.9.3t-.9-.3l-1.6-1.7zm7.8-22v2.4l7.5-2.4 7.4 2.4v-2.4h-2.5V7.6h-9.9v2.5h-2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconShip.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconShip;
//# sourceMappingURL=IconShip.js.map