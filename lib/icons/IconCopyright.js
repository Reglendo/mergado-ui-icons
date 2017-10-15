import * as React from "react";
class IconCopyright extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--copyright ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M28.7 24v2.4q0 1.1-.8 2t-2.1 1.3-2.7.8-2.6.2q-4.6 0-7.6-3.1t-3.1-7.7q0-4.5 3-7.6t7.6-3q.7 0 1.7.1t2 .4 2.1.7 1.6 1.3.6 1.8V16q0 .4-.4.4h-2.6q-.4 0-.4-.4v-1.5q0-1-1.4-1.5t-3.1-.6q-3.1 0-5.1 2.1t-2 5.3q0 3.3 2.1 5.5t5.2 2.2q1.5 0 3.1-.5t1.5-1.5V24q0-.2.1-.3t.3-.1h2.6q.1 0 .3.1t.1.3zM20.1 5.7q-2.9 0-5.5 1.2t-4.6 3-3 4.6T5.9 20 7 25.5t3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5-1.1-5.5-3.1-4.6-4.5-3.1-5.6-1.1zM37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCopyright.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCopyright;
//# sourceMappingURL=IconCopyright.js.map