import * as React from "react";
class IconCaretSquareORight extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--caret-square-o-right ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M27.3 20q0 .7-.6 1.2l-10 7.1q-.7.5-1.5.1t-.8-1.3V12.9q0-.9.8-1.3t1.5.1l10 7.1q.6.5.6 1.2zm4.3 10.7V9.3q0-.3-.2-.5t-.5-.2H9.4q-.3 0-.5.2t-.2.5v21.4q0 .3.2.5t.5.2h21.5q.3 0 .5-.2t.2-.5zm5.7-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCaretSquareORight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconCaretSquareORight;
//# sourceMappingURL=IconCaretSquareORight.js.map