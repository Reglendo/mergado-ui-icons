import * as React from "react";
class IconHtml5 extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--html5 ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.7 13.3l0.4-3.9h-19.8l1.1 11.9h13.7l-0.5 5.1-4.4 1.2-4.4-1.2-0.3-3.1h-3.9l0.5 6.2 8.1 2.2h0.1v0l8-2.2 1.1-12.1h-14.4l-0.3-4.1h15z m-25.2-10.4h31.4l-2.8 32.1-12.9 3.6-12.8-3.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconHtml5.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconHtml5;
//# sourceMappingURL=IconHtml5.js.map