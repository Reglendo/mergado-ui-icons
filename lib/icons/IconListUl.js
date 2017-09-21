import * as React from "react";
class IconListUl extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--list-ul ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m8.6 31.4q0 1.8-1.3 3.1t-3 1.2-3.1-1.2-1.2-3.1 1.3-3 3-1.3 3 1.3 1.3 3z m0-11.4q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3 3-1.3 3 1.3 1.3 3z m31.4 9.3v4.3q0 0.3-0.2 0.5t-0.5 0.2h-27.2q-0.2 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h27.2q0.3 0 0.5 0.2t0.2 0.5z m-31.4-20.7q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3.1 3-1.2 3 1.2 1.3 3.1z m31.4 9.3v4.2q0 0.3-0.2 0.5t-0.5 0.3h-27.2q-0.2 0-0.5-0.3t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.3h27.2q0.3 0 0.5 0.3t0.2 0.5z m0-11.5v4.3q0 0.3-0.2 0.5t-0.5 0.2h-27.2q-0.2 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h27.2q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconListUl.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconListUl;
//# sourceMappingURL=IconListUl.js.map