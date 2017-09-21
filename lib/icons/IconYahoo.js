import * as React from "react";
class IconYahoo extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--yahoo ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.2 21.4l0.3 15.7q-1.4-0.2-2.4-0.2-0.9 0-2.3 0.2l0.3-15.7q-0.9-1.6-3.8-6.6t-4.8-8.4-4.1-6.4q1.3 0.3 2.4 0.3 1 0 2.5-0.3 1.4 2.5 3 5.1t3.7 6.2 3.1 5.1q0.8-1.4 2.5-4t2.6-4.2 2.3-4 2.4-4.2q1.2 0.3 2.4 0.3 1.3 0 2.6-0.3-0.7 0.9-1.4 2t-1.1 1.7-1.3 2.2-1 1.8q-3.3 5.6-7.9 13.7z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconYahoo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconYahoo;
//# sourceMappingURL=IconYahoo.js.map