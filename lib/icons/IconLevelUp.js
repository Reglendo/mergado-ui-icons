import * as React from "react";
class IconLevelUp extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--level-up ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.2 13.5q-0.4 0.8-1.3 0.8h-4.3v19.3q0 0.3-0.2 0.5t-0.5 0.2h-15.7q-0.5 0-0.6-0.4-0.2-0.5 0.1-0.8l3.5-4.3q0.2-0.2 0.6-0.2h7.1v-14.3h-4.3q-0.9 0-1.3-0.8-0.3-0.9 0.2-1.6l7.2-8.5q0.4-0.5 1.1-0.5t1.1 0.5l7.1 8.5q0.6 0.8 0.2 1.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconLevelUp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconLevelUp;
//# sourceMappingURL=IconLevelUp.js.map