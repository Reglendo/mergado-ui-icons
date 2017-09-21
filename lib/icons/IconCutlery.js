import * as React from "react";
class IconCutlery extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--cutlery ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m18.8 1.4v14.3q0 1.4-0.8 2.5t-2.1 1.6v17.3q0 1.2-0.8 2.1t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2.1v-17.3q-1.3-0.5-2.1-1.6t-0.8-2.5v-14.3q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v9.3q0 0.6 0.4 1t1 0.4 1-0.4 0.4-1v-9.3q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v9.3q0 0.6 0.4 1t1 0.4 1-0.4 0.4-1v-9.3q0-0.6 0.4-1t1.1-0.4 1 0.4 0.4 1z m17.1 0v35.7q0 1.2-0.8 2.1t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2.1v-11.4h-5q-0.3 0-0.5-0.2t-0.3-0.5v-17.9q0-2.9 2.1-5t5.1-2.1h5.7q0.6 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconCutlery.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconCutlery;
//# sourceMappingURL=IconCutlery.js.map