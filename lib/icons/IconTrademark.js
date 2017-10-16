import * as React from "react";
class IconTrademark extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--trademark ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M17.4 12.9v2.3q0 .3-.2.5t-.5.2h-6v16.4q0 .3-.2.5t-.4.2H7.3q-.2 0-.4-.2t-.2-.5V15.9H.6q-.2 0-.4-.2t-.2-.5v-2.3q0-.3.2-.5t.5-.2h16q.3 0 .5.2t.2.5zm21.1-.1L40 32.3q0 .3-.1.5-.2.2-.5.2h-2.7q-.3 0-.5-.2t-.2-.4l-.9-11.9-3.8 8.6q-.2.4-.6.4h-2.5q-.4 0-.5-.4l-3.9-8.7-.9 12q0 .2-.2.4t-.4.2h-2.7q-.3 0-.5-.2t-.2-.5l1.6-19.5q0-.2.2-.4t.4-.2H24q.4 0 .6.4l4.5 10.5q.2.5.4 1.1 0-.2.2-.5t.2-.6l4.5-10.5q.1-.4.5-.4h2.9q.3 0 .4.2t.3.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTrademark.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconTrademark;
//# sourceMappingURL=IconTrademark.js.map