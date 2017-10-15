import * as React from "react";
class IconPlusSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--plus-square ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.6 21.4v-2.8q0-.6-.5-1t-1-.5H23V10q0-.6-.4-1t-1-.4h-2.9q-.6 0-1 .4t-.4 1v7.1h-7.2q-.5 0-1 .5t-.4 1v2.8q0 .6.4 1t1 .5h7.2V30q0 .6.4 1t1 .4h2.9q.6 0 1-.4t.4-1v-7.1h7.1q.6 0 1-.5t.5-1zm5.7-12.1v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconPlusSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconPlusSquare;
//# sourceMappingURL=IconPlusSquare.js.map