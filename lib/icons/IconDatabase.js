import * as React from "react";
class IconDatabase extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--database ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.1 17.1q5.3 0 9.9-0.9t7.3-2.9v3.8q0 1.6-2.3 2.9t-6.3 2.1-8.6 0.8-8.6-0.8-6.2-2.1-2.3-2.9v-3.8q2.7 1.9 7.3 2.9t9.8 0.9z m0 17.2q5.3 0 9.9-1t7.3-2.8v3.8q0 1.5-2.3 2.8t-6.3 2.1-8.6 0.8-8.6-0.8-6.2-2.1-2.3-2.8v-3.8q2.7 1.9 7.3 2.8t9.8 1z m0-8.6q5.3 0 9.9-0.9t7.3-2.9v3.8q0 1.6-2.3 2.9t-6.3 2.1-8.6 0.7-8.6-0.7-6.2-2.1-2.3-2.9v-3.8q2.7 1.9 7.3 2.9t9.8 0.9z m0-25.7q4.7 0 8.6 0.8t6.3 2.1 2.3 2.8v2.9q0 1.5-2.3 2.8t-6.3 2.1-8.6 0.8-8.6-0.8-6.2-2.1-2.3-2.8v-2.9q0-1.5 2.3-2.8t6.3-2.1 8.5-0.8z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconDatabase.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconDatabase;
//# sourceMappingURL=IconDatabase.js.map