import * as React from "react";
class IconInr extends React.Component {
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
                    React.createElement("path", { d: "M30 10.5v2.3q0 .3-.2.5t-.5.2h-3.7q-.5 3.2-2.9 5.2t-6.2 2.5q3.8 3.9 10.3 11.9.3.4.1.8-.2.4-.7.4h-4.3q-.4 0-.6-.3-6.8-8.2-11.1-12.7-.2-.2-.2-.5v-2.9q0-.2.2-.5t.5-.2h2.5q3 0 4.8-.9t2.2-2.8h-9.5q-.3 0-.5-.2t-.2-.5v-2.3q0-.3.2-.5t.5-.2h9.2q-1.2-2.5-6-2.5h-3.2q-.3 0-.5-.3t-.2-.5V3.6q0-.3.2-.5t.5-.2h18.6q.3 0 .5.2t.2.5v2.2q0 .4-.2.6t-.5.2h-5.2q1 1.3 1.4 3.2h3.8q.3 0 .5.2t.2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconInr.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconInr;
//# sourceMappingURL=IconInr.js.map