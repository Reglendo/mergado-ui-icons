import * as React from "react";
class IconBed extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--bed ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m5 22.5h33.5q0.5 0 0.9 0.4t0.3 0.8v8.7h-4.9v-4.9h-29.8v4.9h-5v-23.6q0-0.5 0.4-0.9t0.8-0.3h2.5q0.5 0 0.9 0.3t0.4 0.9v13.7z m11.1-6.2q0-2.1-1.4-3.5t-3.5-1.5-3.5 1.5-1.5 3.5 1.5 3.5 3.5 1.4 3.5-1.4 1.4-3.5z m23.7 4.9v-1.2q0-3.1-2.2-5.3t-5.3-2.2h-13.7q-0.5 0-0.8 0.4t-0.4 0.9v7.4h22.4z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconBed.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconBed;
//# sourceMappingURL=IconBed.js.map