import * as React from "react";
class IconMousePointer extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--mouse-pointer ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m32.3 23.3q0.7 0.7 0.3 1.5-0.4 0.9-1.3 0.9h-8.5l4.4 10.6q0.3 0.6 0 1.1t-0.7 0.8l-4 1.7q-0.5 0.2-1.1 0t-0.7-0.8l-4.3-10.1-7 7q-0.4 0.4-1 0.4-0.2 0-0.5-0.1-0.9-0.4-0.9-1.3v-33.6q0-0.9 0.9-1.3 0.3-0.1 0.5-0.1 0.6 0 1 0.4z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconMousePointer.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconMousePointer;
//# sourceMappingURL=IconMousePointer.js.map