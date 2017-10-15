import * as React from "react";
class IconQrcode extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--qrcode ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M13.1 25.7v2.9h-2.9v-2.9h2.9zm0-17.1v2.8h-2.9V8.6h2.9zm17.1 0v2.8h-2.8V8.6h2.8zM7.4 31.4h8.5v-8.5H7.4v8.5zm0-17.1h8.5V5.7H7.4v8.6zm17.1 0h8.6V5.7h-8.6v8.6zM18.8 20v14.3H4.5V20h14.3zm11.4 11.4v2.9h-2.8v-2.9h2.8zm5.7 0v2.9h-2.8v-2.9h2.8zm0-11.4v8.6h-8.5v-2.9h-2.9v8.6h-2.9V20h8.6v2.9h2.9V20h2.8zM18.8 2.9v14.2H4.5V2.9h14.3zm17.1 0v14.2H21.6V2.9h14.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconQrcode.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconQrcode;
//# sourceMappingURL=IconQrcode.js.map