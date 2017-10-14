import * as React from "react";
class IconCompress extends React.Component {
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
                    React.createElement("path", { d: "M20.1 21.4v10q0 .6-.4 1t-1 .5-1-.5l-3.2-3.2-7.4 7.4q-.2.3-.5.3t-.5-.3l-2.6-2.5q-.2-.2-.2-.5t.2-.5l7.4-7.5-3.2-3.2q-.4-.4-.4-1t.4-1 1-.4h10q.6 0 1 .4t.4 1zM37 6.4q0 .3-.2.5l-7.4 7.5 3.2 3.2q.4.4.4 1t-.4 1-1 .4h-10q-.6 0-1-.4t-.5-1v-10q0-.6.5-1t1-.5 1 .5l3.2 3.2 7.4-7.4q.2-.3.5-.3t.5.3l2.6 2.5q.2.2.2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCompress.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCompress;
//# sourceMappingURL=IconCompress.js.map