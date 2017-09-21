import * as React from "react";
class IconBattery0 extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--battery-0 ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m38.1 14.4q0.9 0 1.6 0.7t0.6 1.5v6.8q0 0.9-0.6 1.5t-1.6 0.7v2.8q0 1.2-0.8 2t-2 0.8h-32.5q-1.2 0-2-0.8t-0.8-2v-16.8q0-1.2 0.8-2t2-0.8h32.5q1.1 0 2 0.8t0.8 2v2.8z m0 9v-6.8h-2.2v-5q0-0.2-0.2-0.4t-0.4-0.2h-32.5q-0.2 0-0.4 0.2t-0.2 0.4v16.8q0 0.2 0.2 0.4t0.4 0.2h32.5q0.2 0 0.4-0.2t0.2-0.4v-5h2.2z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconBattery0.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconBattery0;
//# sourceMappingURL=IconBattery0.js.map