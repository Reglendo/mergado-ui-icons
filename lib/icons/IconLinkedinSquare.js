import * as React from "react";
class IconLinkedinSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M8.3 31.6h5.1V16.1H8.3v15.5zm5.5-20.3q0-1.2-.8-1.9t-2.1-.8-2.1.8-.8 1.9q0 1.1.8 1.9t2 .8h.1q1.3 0 2.1-.8t.8-1.9zm13 20.3H32v-8.9q0-3.5-1.6-5.2t-4.3-1.8q-3.1 0-4.7 2.6v-2.2h-5.1v15.5h5.1v-8.7q0-.8.2-1.2.3-.8 1-1.4t1.7-.5q2.5 0 2.5 3.5v8.3zM37.3 9.3v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconLinkedinSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconLinkedinSquare;
//# sourceMappingURL=IconLinkedinSquare.js.map