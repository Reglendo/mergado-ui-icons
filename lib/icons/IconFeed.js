import * as React from "react";
class IconFeed extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--feed ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m13.1 30q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3 3-1.3 3 1.3 1.3 3z m11.4 2.7q0 0.7-0.4 1.1-0.4 0.5-1 0.5h-3q-0.6 0-1-0.4t-0.4-0.9q-0.5-5.1-4.2-8.7t-8.7-4.2q-0.6 0-0.9-0.4t-0.4-1v-3q0-0.6 0.5-1 0.3-0.4 0.9-0.4h0.1q3.6 0.3 6.9 1.8t5.8 4q2.5 2.6 4 5.8t1.8 6.8z m11.4 0.1q0.1 0.6-0.4 1-0.4 0.5-1 0.5h-3.2q-0.6 0-1-0.4t-0.4-1q-0.3-4.8-2.3-9.1t-5.1-7.5-7.5-5.1-9.2-2.3q-0.5 0-0.9-0.5t-0.4-0.9v-3.2q0-0.6 0.4-1 0.5-0.4 1-0.4h0.1q5.8 0.2 11.2 2.6t9.5 6.6q4.2 4.1 6.6 9.5t2.6 11.2z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconFeed.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconFeed;
//# sourceMappingURL=IconFeed.js.map