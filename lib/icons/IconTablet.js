import * as React from "react";
class IconTablet extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--tablet ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m21.3 31.4q0-0.5-0.4-1t-1-0.4-1 0.4-0.5 1 0.5 1 1 0.5 1-0.5 0.4-1z m8.6-3.5v-21.5q0-0.3-0.3-0.5t-0.5-0.2h-18.5q-0.3 0-0.5 0.2t-0.2 0.5v21.5q0 0.2 0.2 0.5t0.5 0.2h18.5q0.3 0 0.5-0.2t0.3-0.5z m2.8-21.5v24.3q0 1.5-1 2.5t-2.6 1.1h-18.5q-1.5 0-2.6-1.1t-1-2.5v-24.3q0-1.4 1.1-2.5t2.5-1h18.5q1.5 0 2.6 1t1 2.5z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconTablet.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconTablet;
//# sourceMappingURL=IconTablet.js.map