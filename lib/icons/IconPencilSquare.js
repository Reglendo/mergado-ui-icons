import * as React from "react";
class IconPencilSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--pencil-square ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M12 24.7l3.4 3.4-1.1 1.2H13v-2.2h-2.1v-1.2zm9.3-8.7q.3.3-.1.7l-6.5 6.5q-.4.4-.7.1-.3-.3.1-.7l6.5-6.5q.4-.4.7-.1zm-6.2 15.4l12.2-12.1-6.4-6.4L8.7 25v6.4h6.4zm13.6-13.5l2.1-2.1q.6-.6.6-1.5t-.6-1.5l-3.4-3.4q-.6-.7-1.5-.7t-1.6.7l-2 2zm8.6-8.6v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconPencilSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconPencilSquare;
//# sourceMappingURL=IconPencilSquare.js.map