import * as React from "react";
class IconWheelchairAlt extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--wheelchair-alt ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M35.1 18.1q.8.8.6 1.9l-.9 12.3q-.1.9-.8 1.5t-1.6.7q-.1 0-.2-.1-1 0-1.6-.8t-.6-1.7l.8-9.6-3.2.2q1.2 2.5 1.2 5.4 0 4.8-3.3 8.3l-3-3.1q2-2.3 2-5.2 0-3.3-2.3-5.6T16.7 20q-3 0-5.3 2.1l-3-3.1q2.6-2.5 6.3-3.1l5.9-6.7-3.3-2-4.1 3.6q-.7.7-1.7.6t-1.6-.8-.6-1.7.8-1.6l5.3-4.8q.6-.5 1.3-.6t1.5.4L29 8.6q.9.4 1.1 1.5.4 1.5-.6 2.6L25 17.9l8.2-.5q1.1 0 1.9.8zM30.7 7.9q-1.7 0-2.8-1.1T26.7 4t1.2-2.8T30.7 0t2.8 1.2T34.7 4t-1.2 2.8-2.8 1.1zm-14 27.8q2.3 0 4.4-1.4l3.1 3.1Q20.9 40 16.7 40q-3.3 0-6.1-1.6t-4.5-4.5-1.6-6q0-4.2 2.6-7.5l3.1 3.1q-1.3 1.9-1.3 4.4 0 3.2 2.3 5.5t5.5 2.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconWheelchairAlt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconWheelchairAlt;
//# sourceMappingURL=IconWheelchairAlt.js.map