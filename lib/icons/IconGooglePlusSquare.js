import * as React from "react";
class IconGooglePlusSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--google-plus-square ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M23.5 20.2q0-.6-.2-1.4h-8v2.9h4.8q-.1.6-.4 1.1t-.8 1.2-1.5 1-2.1.4q-2.3 0-3.8-1.6T9.9 20t1.6-3.8 3.8-1.6q2 0 3.4 1.3l2.3-2.2q-2.4-2.3-5.7-2.3-3.6 0-6.1 2.5T6.7 20t2.5 6.1 6.1 2.5q3.6 0 5.9-2.4t2.3-6zm7.7 1h2.4v-2.4h-2.4v-2.5h-2.5v2.5h-2.4v2.4h2.4v2.5h2.5v-2.5zm6.1-11.9v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconGooglePlusSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconGooglePlusSquare;
//# sourceMappingURL=IconGooglePlusSquare.js.map