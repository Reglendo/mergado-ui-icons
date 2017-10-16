import * as React from "react";
class IconCny extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--cny ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M22 34.3h-3.9q-.3 0-.5-.2t-.2-.5v-7.4H11q-.3 0-.5-.2t-.2-.5v-2.3q0-.3.2-.5t.5-.2h6.4v-1.9H11q-.3 0-.5-.2t-.2-.5v-2.4q0-.2.2-.5t.5-.2h4.8L8.6 3.9q-.2-.3 0-.7.2-.3.6-.3h4.3q.5 0 .7.4l4.8 9.4q.4.9 1.2 2.8.3-.5.7-1.5t.6-1.3l4.3-9.4q.2-.4.6-.4h4.3q.4 0 .6.3.2.3 0 .7l-7 12.9h4.8q.3 0 .5.2t.3.5v2.4q0 .3-.3.5t-.5.2h-6.4v1.9h6.4q.3 0 .5.2t.3.5v2.3q0 .3-.3.5t-.5.2h-6.4v7.4q0 .3-.2.5t-.5.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCny.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconCny;
//# sourceMappingURL=IconCny.js.map