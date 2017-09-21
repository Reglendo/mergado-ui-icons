import * as React from "react";
class IconHourglass2 extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--hourglass-2 ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m34.4 2.9q0 5.8-2.3 10.3t-6 6.8q3.6 2.4 6 6.8t2.3 10.3h2.2q0.3 0 0.5 0.2t0.2 0.6v1.4q0 0.3-0.2 0.5t-0.5 0.2h-32.9q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.4 0.2-0.6t0.5-0.2h2.2q0-5.8 2.3-10.3t6-6.8q-3.6-2.4-6-6.8t-2.3-10.3h-2.2q-0.3 0-0.5-0.2t-0.2-0.6v-1.4q0-0.3 0.2-0.5t0.5-0.2h32.9q0.3 0 0.5 0.2t0.2 0.5v1.4q0 0.4-0.2 0.6t-0.5 0.2h-2.2z m-2.8 0h-22.9q0 4.6 1.9 8.5h19.1q1.9-3.9 1.9-8.5z m-1.3 27.1q-1.2-3.1-3.2-5.4t-4.4-3.2h-5.1q-2.3 1-4.4 3.2t-3.2 5.4h20.3z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconHourglass2.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconHourglass2;
//# sourceMappingURL=IconHourglass2.js.map