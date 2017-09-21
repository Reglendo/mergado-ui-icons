import * as React from "react";
class IconCaretSquareORight extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--caret-square-o-right ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.3 20q0 0.7-0.6 1.2l-10 7.1q-0.7 0.5-1.5 0.1-0.8-0.4-0.8-1.3v-14.2q0-0.9 0.8-1.3 0.8-0.4 1.5 0.1l10 7.1q0.6 0.5 0.6 1.2z m4.3 10.7v-21.4q0-0.3-0.2-0.5t-0.5-0.2h-21.5q-0.3 0-0.5 0.2t-0.2 0.5v21.4q0 0.3 0.2 0.5t0.5 0.2h21.5q0.3 0 0.5-0.2t0.2-0.5z m5.7-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconCaretSquareORight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconCaretSquareORight;
//# sourceMappingURL=IconCaretSquareORight.js.map