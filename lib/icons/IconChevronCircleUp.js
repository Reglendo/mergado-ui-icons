import * as React from "react";
class IconChevronCircleUp extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--chevron-circle-up ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29 25.4l2.3-2.3q0.4-0.4 0.4-1t-0.4-1l-10.2-10.1q-0.4-0.4-1-0.4t-1 0.4l-10.1 10.1q-0.4 0.5-0.4 1t0.4 1l2.3 2.3q0.4 0.4 1 0.4t1-0.4l6.8-6.8 6.9 6.8q0.4 0.4 1 0.4t1-0.4z m8.3-5.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconChevronCircleUp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconChevronCircleUp;
//# sourceMappingURL=IconChevronCircleUp.js.map