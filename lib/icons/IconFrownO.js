import * as React from "react";
class IconFrownO extends React.Component {
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
                    React.createElement("path", { d: "m28.3 27.4q0.2 0.6-0.1 1.1t-0.8 0.7-1.1-0.1-0.7-0.8q-0.6-1.8-2.1-2.9t-3.4-1.1-3.3 1.1-2.1 2.9q-0.2 0.6-0.7 0.8t-1.1 0.1q-0.6-0.2-0.8-0.7t-0.1-1.1q0.8-2.7 3.1-4.3t5-1.7 5.1 1.7 3.1 4.3z m-11-13.1q0 1.2-0.9 2t-2 0.8-2-0.8-0.8-2 0.8-2 2-0.9 2 0.9 0.9 2z m11.4 0q0 1.2-0.8 2t-2 0.8-2.1-0.8-0.8-2 0.8-2 2.1-0.9 2 0.9 0.8 2z m5.7 5.7q0-2.9-1.1-5.5t-3.1-4.6-4.5-3.1-5.6-1.1-5.5 1.1-4.6 3.1-3 4.6-1.1 5.5 1.1 5.5 3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5z m2.9 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFrownO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFrownO;
//# sourceMappingURL=IconFrownO.js.map