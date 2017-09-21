import * as React from "react";
class IconTasks extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--tasks ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.9 31.4h14.2v-2.8h-14.2v2.8z m-8.6-11.4h22.8v-2.9h-22.8v2.9z m14.3-11.4h8.5v-2.9h-8.5v2.9z m11.4 18.5v5.8q0 0.5-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-5.8q0-0.5 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z m0-11.4v5.7q0 0.6-0.4 1t-1 0.5h-37.2q-0.6 0-1-0.5t-0.4-1v-5.7q0-0.6 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z m0-11.4v5.7q0 0.6-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconTasks.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconTasks;
//# sourceMappingURL=IconTasks.js.map