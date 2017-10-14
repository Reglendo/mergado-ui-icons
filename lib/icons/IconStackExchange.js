import * as React from "react";
class IconStackExchange extends React.Component {
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
                    React.createElement("path", { d: "m33.6 28v1.4q0 1.9-1.3 3.3t-3.1 1.3h-1.2l-5.8 6v-6h-11.9q-1.8 0-3-1.3t-1.3-3.3v-1.4h27.6z m0-7.3v5.7h-27.6v-5.7h27.6z m0-7.3v5.7h-27.6v-5.7h27.6z m0-3.2v1.5h-27.6v-1.5q0-1.8 1.3-3.2t3-1.3h18.9q1.8 0 3.1 1.3t1.3 3.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconStackExchange.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconStackExchange;
//# sourceMappingURL=IconStackExchange.js.map