import * as React from "react";
class IconClipboard extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--clipboard ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M17.1 37.1h20V22.9h-9.2q-.9 0-1.6-.7t-.6-1.5v-9.3h-8.6v25.7zM22.9 5V3.6q0-.3-.3-.5t-.5-.2H6.4q-.3 0-.5.2t-.2.5V5q0 .3.2.5t.5.2h15.7q.3 0 .5-.2t.3-.5zm5.7 15h6.6l-6.6-6.7V20zM40 22.9v15q0 .9-.6 1.5t-1.5.6H16.4q-.9 0-1.5-.6t-.6-1.5v-3.6H2.1q-.9 0-1.5-.6T0 32.1v-30Q0 1.3.6.6T2.1 0h24.3q.9 0 1.5.6t.7 1.5v7.4l.8.6 9.1 9.1q.6.6 1.1 1.7t.4 2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconClipboard.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconClipboard;
//# sourceMappingURL=IconClipboard.js.map