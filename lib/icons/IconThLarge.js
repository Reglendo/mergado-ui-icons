import * as React from "react";
class IconThLarge extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--th-large ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M18.6 22.9v8.5q0 1.2-.8 2t-2 .9H4.4q-1.2 0-2.1-.9t-.8-2v-8.5q0-1.2.8-2.1t2.1-.8h11.4q1.1 0 2 .8t.8 2.1zm0-17.2v8.6q0 1.1-.8 2t-2 .8H4.4q-1.2 0-2.1-.8t-.8-2V5.7q0-1.1.8-2t2.1-.8h11.4q1.1 0 2 .8t.8 2zm20 17.2v8.5q0 1.2-.8 2t-2 .9H24.4q-1.2 0-2.1-.9t-.8-2v-8.5q0-1.2.8-2.1t2.1-.8h11.4q1.1 0 2 .8t.8 2.1zm0-17.2v8.6q0 1.1-.8 2t-2 .8H24.4q-1.2 0-2.1-.8t-.8-2V5.7q0-1.1.8-2t2.1-.8h11.4q1.1 0 2 .8t.8 2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconThLarge.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconThLarge;
//# sourceMappingURL=IconThLarge.js.map