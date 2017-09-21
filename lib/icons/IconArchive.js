import * as React from "react";
class IconArchive extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--archive ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m24.3 18.6q0-0.6-0.4-1t-1-0.5h-5.8q-0.5 0-1 0.5t-0.4 1 0.4 1 1 0.4h5.8q0.5 0 1-0.4t0.4-1z m12.8-4.3v21.4q0 0.6-0.4 1t-1 0.4h-31.4q-0.6 0-1-0.4t-0.4-1v-21.4q0-0.6 0.4-1t1-0.4h31.4q0.6 0 1 0.4t0.4 1z m1.5-10v5.7q0 0.6-0.5 1t-1 0.4h-34.2q-0.6 0-1-0.4t-0.5-1v-5.7q0-0.6 0.5-1t1-0.4h34.2q0.6 0 1 0.4t0.5 1z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconArchive.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconArchive;
//# sourceMappingURL=IconArchive.js.map