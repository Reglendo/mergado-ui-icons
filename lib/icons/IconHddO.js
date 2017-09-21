import * as React from "react";
class IconHddO extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--hdd-o ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.2 27.1q0 0.8-0.5 1.3t-1.3 0.5-1.2-0.5-0.6-1.3 0.6-1.2 1.2-0.5 1.3 0.5 0.5 1.2z m5.7 0q0 0.8-0.5 1.3t-1.3 0.5-1.2-0.5-0.5-1.3 0.5-1.2 1.2-0.5 1.3 0.5 0.5 1.2z m2.5 3.6v-7.1q0-0.3-0.2-0.5t-0.5-0.2h-27.1q-0.3 0-0.5 0.2t-0.2 0.5v7.1q0 0.3 0.2 0.5t0.5 0.2h27.1q0.3 0 0.5-0.2t0.2-0.5z m-27.4-10.7h26.3l-3.5-10.8q-0.1-0.2-0.4-0.4t-0.5-0.2h-17.5q-0.3 0-0.6 0.2t-0.3 0.4z m30.3 3.6v7.1q0 1.5-1.1 2.5t-2.5 1.1h-27.1q-1.5 0-2.6-1.1t-1-2.5v-7.1q0-0.6 0.4-1.7l4.4-13.5q0.3-1.2 1.4-2t2.2-0.7h17.5q1.2 0 2.2 0.7t1.4 2l4.4 13.5q0.4 1.1 0.4 1.7z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconHddO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconHddO;
//# sourceMappingURL=IconHddO.js.map