import * as React from "react";
class IconThumbTack extends React.Component {
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
                    React.createElement("path", { d: "m17.7 19.3v-10q0-0.3-0.2-0.5t-0.5-0.2-0.5 0.2-0.2 0.5v10q0 0.3 0.2 0.5t0.5 0.2 0.5-0.2 0.2-0.5z m15 7.8q0 0.6-0.4 1t-1 0.5h-9.6l-1.1 10.8q-0.1 0.2-0.3 0.4t-0.4 0.2h0q-0.6 0-0.8-0.6l-1.7-10.8h-9q-0.6 0-1-0.5t-0.4-1q0-2.7 1.8-4.9t3.9-2.2v-11.4q-1.1 0-2-0.9t-0.8-2 0.8-2 2-0.8h14.3q1.2 0 2 0.8t0.9 2-0.9 2-2 0.9v11.4q2.2 0 4 2.2t1.7 4.9z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconThumbTack.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconThumbTack;
//# sourceMappingURL=IconThumbTack.js.map