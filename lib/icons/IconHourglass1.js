import * as React from "react";
class IconHourglass1 extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--hourglass-1 ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m34.4 2.9q0 5.8-2.3 10.3t-6 6.8q3.6 2.4 6 6.8t2.3 10.3h2.2q0.3 0 0.5 0.2t0.2 0.6v1.4q0 0.3-0.2 0.5t-0.5 0.2h-32.9q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.4 0.2-0.6t0.5-0.2h2.2q0-5.8 2.3-10.3t6-6.8q-3.6-2.4-6-6.8t-2.3-10.3h-2.2q-0.3 0-0.5-0.2t-0.2-0.6v-1.4q0-0.3 0.2-0.5t0.5-0.2h32.9q0.3 0 0.5 0.2t0.2 0.5v1.4q0 0.4-0.2 0.6t-0.5 0.2h-2.2z m-2.8 0h-22.9q0 1.4 0.2 2.8h22.5q0.2-1.3 0.2-2.8z m0 34.2q0-2.9-0.8-5.5t-2-4.7-2.8-3.4-3.3-2.1h-5.1q-1.7 0.7-3.3 2.1t-2.8 3.4-2 4.7-0.8 5.5h22.9z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconHourglass1.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconHourglass1;
//# sourceMappingURL=IconHourglass1.js.map