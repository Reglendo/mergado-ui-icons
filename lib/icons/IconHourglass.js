import * as React from "react";
class IconHourglass extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--hourglass ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m36.6 35.7q0.3 0 0.5 0.2t0.2 0.5v2.9q0 0.3-0.2 0.5t-0.5 0.2h-32.9q-0.3 0-0.5-0.2t-0.2-0.5v-2.9q0-0.3 0.2-0.5t0.5-0.2h32.9z m-30.7-1.4q0.1-1.2 0.4-2.4t0.6-2.1 1.1-2 1.2-1.7 1.4-1.5 1.5-1.4 1.5-1.2 1.5-1 1.5-1q-1-0.6-1.5-1t-1.5-1-1.5-1.2-1.5-1.4-1.4-1.5-1.2-1.7-1.1-2-0.6-2.1-0.4-2.4h28.5q-0.1 1.2-0.4 2.4t-0.6 2.1-1.1 2-1.2 1.7-1.4 1.5-1.5 1.4-1.6 1.2-1.4 1-1.5 1q1 0.6 1.5 1t1.4 1 1.6 1.3 1.5 1.3 1.4 1.5 1.2 1.7 1.1 2 0.6 2.1 0.4 2.4h-28.5z m30.7-34.3q0.3 0 0.5 0.2t0.2 0.5v2.9q0 0.3-0.2 0.5t-0.5 0.2h-32.9q-0.3 0-0.5-0.2t-0.2-0.5v-2.9q0-0.3 0.2-0.5t0.5-0.2h32.9z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconHourglass.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconHourglass;
//# sourceMappingURL=IconHourglass.js.map