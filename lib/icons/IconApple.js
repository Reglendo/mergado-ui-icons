import * as React from "react";
class IconApple extends React.Component {
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
                    React.createElement("path", { d: "m35.6 27.1q-0.9 2.8-2.8 5.6-2.8 4.4-5.7 4.4-1.1 0-3.1-0.7-1.9-0.8-3.4-0.8-1.3 0-3.2 0.8-1.8 0.7-2.9 0.7-3.4 0-6.7-5.7-3.3-5.9-3.3-11.3 0-5.1 2.5-8.3 2.5-3.2 6.4-3.2 1.6 0 3.9 0.6 2.3 0.7 3.1 0.7 1 0 3.2-0.7 2.3-0.8 3.8-0.8 2.7 0 4.8 1.4 1.2 0.8 2.3 2.3-1.7 1.5-2.5 2.6-1.5 2.1-1.5 4.6 0 2.8 1.6 5t3.5 2.8z m-8.4-26.2q0 1.4-0.6 3.1-0.7 1.7-2.1 3.1-1.2 1.2-2.4 1.6-0.9 0.2-2.4 0.3 0.1-3.3 1.8-5.7 1.6-2.4 5.6-3.3 0 0.1 0 0.2t0.1 0.3q0 0.1 0 0.2t0 0.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconApple.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconApple;
//# sourceMappingURL=IconApple.js.map