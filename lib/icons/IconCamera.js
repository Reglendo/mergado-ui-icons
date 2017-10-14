import * as React from "react";
class IconCamera extends React.Component {
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
                    React.createElement("path", { d: "m19.9 15.3q2.5 0 4.3 1.8t1.7 4.2-1.7 4.3-4.3 1.7-4.2-1.7-1.7-4.3 1.7-4.2 4.2-1.8z m14.7-8.6q2.2 0 3.7 1.6t1.6 3.7v18.6q0 2.2-1.6 3.8t-3.7 1.5h-29.3q-2.2 0-3.7-1.5t-1.6-3.8v-18.6q0-2.2 1.6-3.7t3.7-1.6h4.7l1-2.8q0.4-1 1.5-1.8t2.1-0.7h10.6q1.1 0 2.2 0.7t1.4 1.8l1.1 2.8h4.7z m-14.7 23.9q3.9 0 6.6-2.7t2.7-6.6-2.7-6.5-6.6-2.8-6.5 2.8-2.8 6.5 2.8 6.6 6.5 2.7z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCamera.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCamera;
//# sourceMappingURL=IconCamera.js.map