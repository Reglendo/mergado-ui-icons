import * as React from "react";
class IconCaretSquareOUp extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--caret-square-o-up ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M28.6 24.9q-.4.8-1.3.8H13q-.9 0-1.3-.8-.4-.7.1-1.4l7.2-10q.4-.6 1.1-.6t1.2.6l7.1 10q.6.7.2 1.4zm3 5.8V9.3q0-.3-.2-.5t-.5-.2H9.4q-.3 0-.5.2t-.2.5v21.4q0 .3.2.5t.5.2h21.5q.2 0 .5-.2t.2-.5zm5.7-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCaretSquareOUp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCaretSquareOUp;
//# sourceMappingURL=IconCaretSquareOUp.js.map