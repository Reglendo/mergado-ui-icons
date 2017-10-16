import * as React from "react";
class IconEject extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--eject ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M3.3 21.9L19.2 6q.4-.4 1-.4t1 .4L37 21.9q.4.4.3.7t-.7.3H3.7q-.5 0-.7-.3t.3-.7zm32.6 12.4H4.5q-.6 0-1.1-.4t-.4-1v-5.8q0-.5.4-1t1.1-.4h31.4q.6 0 1 .4t.4 1v5.8q0 .5-.4 1t-1 .4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconEject.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconEject;
//# sourceMappingURL=IconEject.js.map