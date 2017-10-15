import * as React from "react";
class IconRenren extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--renren ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M28.3 35q-3.8 2.1-8.2 2.1-4.4 0-8.2-2.1 3.1-1.9 5.2-4.7t3-5.9q.8 3.2 2.9 5.9t5.3 4.7zM17.2 3.2V14q0 5.6-2.8 10.3T7 31.1Q3 26.3 3 20q0-4.1 1.9-7.8t5.1-6 7.2-3zM37.3 20q0 6.3-4.1 11.1-4.5-2.2-7.3-6.8T23 14V3.2q4 .6 7.3 3t5.1 6 1.9 7.8z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconRenren.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconRenren;
//# sourceMappingURL=IconRenren.js.map