import * as React from "react";
class IconPencil extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--pencil ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.1 34.3l2-2-5.2-5.3-2 2v2.4h2.8v2.9h2.4z m11.7-20.7q0-0.5-0.5-0.5-0.2 0-0.4 0.1l-12.1 12.1q-0.1 0.2-0.1 0.4 0 0.5 0.4 0.5 0.3 0 0.4-0.2l12.1-12.1q0.2-0.1 0.2-0.3z m-1.2-4.3l9.3 9.3-18.6 18.5h-9.3v-9.2z m15.2 2.1q0 1.2-0.8 2l-3.7 3.7-9.3-9.2 3.7-3.7q0.8-0.9 2-0.9 1.2 0 2 0.9l5.3 5.2q0.8 0.9 0.8 2z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconPencil.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconPencil;
//# sourceMappingURL=IconPencil.js.map