import * as React from "react";
class IconRoad extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--road ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m23.1 22.1v-0.1l-0.5-6.7q-0.1-0.2-0.3-0.4t-0.4-0.2h-3.9q-0.3 0-0.5 0.2t-0.2 0.4l-0.5 6.7v0.1q0 0.2 0.2 0.4t0.4 0.2h5.1q0.2 0 0.4-0.2t0.2-0.4z m15.7 9.7q0 1.5-0.9 1.5h-14.6q0.2 0 0.4-0.2t0.2-0.5l-0.4-5.3q-0.1-0.3-0.3-0.5t-0.4-0.2h-5.7q-0.3 0-0.5 0.2t-0.2 0.5l-0.4 5.3q0 0.3 0.2 0.5t0.4 0.2h-14.6q-1 0-1-1.5 0-1.1 0.6-2.4l8.6-21.7q0.2-0.4 0.6-0.7t0.8-0.3h7q-0.3 0-0.5 0.2t-0.2 0.5l-0.3 4q0 0.3 0.2 0.4t0.4 0.2h3.5q0.2 0 0.4-0.2t0.2-0.4l-0.3-4q-0.1-0.3-0.3-0.5t-0.4-0.2h7q0.4 0 0.8 0.3t0.5 0.7l8.7 21.7q0.5 1.3 0.5 2.4z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconRoad.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconRoad;
//# sourceMappingURL=IconRoad.js.map