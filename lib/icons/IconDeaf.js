import * as React from "react";
class IconDeaf extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--deaf ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M23.6 18.6q0 .5.4 1t1 .4 1-.4.4-1q0-3.3-2.3-5.6t-5.5-2.3T13 13t-2.3 5.6q0 .6.4 1t1 .4 1-.4.5-1q0-2.1 1.4-3.6t3.6-1.4 3.5 1.4 1.5 3.6zm-5-12.9q-2.6 0-4.9 1T9.5 9.5t-2.7 4.1-1 5q0 .6.4 1t1 .4 1-.4.4-1q0-4.2 3-7.1t7-2.9 7.1 2.9 2.9 7.1q0 1.2-.4 2.3t-.8 1.6-1.3 1.7q-.8.8-1.2 1.4t-1 1.4-.8 2.1-.2 2.3q0 2.4-1.7 4.1t-4.1 1.6q-.5 0-1 .5t-.4 1 .4 1 1 .4q3.6 0 6.1-2.5t2.5-6.1q0-.9.2-1.6t.6-1.5.7-1.1 1-1.2q.8-.9 1.2-1.4t1-1.5.8-2.1.3-2.4q0-2.6-1-5t-2.8-4.1-4.1-2.8-5-1zm-5.4 16.1l5 5L5.3 39.7q-.3.3-.6.3t-.7-.3L.3 36q-.3-.3-.3-.7t.3-.6zM36 .3L39.7 4q.3.3.3.7t-.3.6l-5.2 5.2-.5.6-1.6 1.6Q30.9 9.3 28 6.9L34.7.3q.3-.3.6-.3t.7.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconDeaf.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconDeaf;
//# sourceMappingURL=IconDeaf.js.map