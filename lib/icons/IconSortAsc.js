import * as React from "react";
class IconSortAsc extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--sort-asc ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.4 15.7q0 0.6-0.5 1t-1 0.4h-20q-0.6 0-1-0.4t-0.4-1 0.4-1l10-10q0.4-0.4 1-0.4t1 0.4l10 10q0.5 0.4 0.5 1z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconSortAsc.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconSortAsc;
//# sourceMappingURL=IconSortAsc.js.map