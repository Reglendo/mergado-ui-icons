import * as React from "react";
class IconCaretSquareOUp extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--caret-square-o-up ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.6 24.9q-0.4 0.8-1.3 0.8h-14.3q-0.9 0-1.3-0.8-0.4-0.7 0.1-1.4l7.2-10q0.4-0.6 1.1-0.6t1.2 0.6l7.1 10q0.6 0.7 0.2 1.4z m3 5.8v-21.4q0-0.3-0.2-0.5t-0.5-0.2h-21.5q-0.3 0-0.5 0.2t-0.2 0.5v21.4q0 0.3 0.2 0.5t0.5 0.2h21.5q0.2 0 0.5-0.2t0.2-0.5z m5.7-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconCaretSquareOUp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconCaretSquareOUp;
//# sourceMappingURL=IconCaretSquareOUp.js.map