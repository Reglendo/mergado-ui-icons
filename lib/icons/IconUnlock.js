import * as React from "react";
class IconUnlock extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--unlock ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M38.6 12.9v5.7q0 .6-.4 1t-1 .4h-1.4q-.6 0-1-.4t-.4-1v-5.7q0-2.4-1.7-4.1t-4.1-1.7-4 1.7-1.7 4.1v4.2h2.2q.9 0 1.5.7t.6 1.5v12.8q0 .9-.6 1.6t-1.5.6H3.6q-.8 0-1.5-.6t-.6-1.6V19.3q0-.9.6-1.5t1.5-.7h15v-4.2q0-4.2 3-7.1t7-2.9 7.1 2.9 2.9 7.1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconUnlock.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconUnlock;
//# sourceMappingURL=IconUnlock.js.map