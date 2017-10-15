import * as React from "react";
class IconFireExtinguisher extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--fire-extinguisher ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M15.9 4.3q0-.6-.4-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.4-1zm20-.7v7.1q0 .4-.2.6-.2.1-.5.1h-.1l-10-2.1q-.3-.1-.4-.3t-.2-.4h-5.7v2.2q2.5.6 4.1 2.5t1.6 4.6v17.8q0 .6-.4 1t-1 .4H11.6q-.5 0-1-.4t-.4-1V17.9q0-2.4 1.4-4.3t3.6-2.6V8.6h-.7q-1.3 0-2.6.5t-2 1.2-1.5 1.5-.9 1.2-.3.5q-.4.8-1.3.8-.3 0-.6-.2-.5-.2-.7-.8t.1-1.1l.3-.6q.2-.4.8-1.2t1.4-1.5 1.9-1.5 2.4-1.2q-.6-.9-.6-1.9 0-1.5 1.1-2.5T14.5.7 17 1.8t1.1 2.5q0 .7-.3 1.4h6.7q0-.2.2-.4t.4-.3l10-2.1h.1q.3 0 .5.1.2.2.2.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFireExtinguisher.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFireExtinguisher;
//# sourceMappingURL=IconFireExtinguisher.js.map