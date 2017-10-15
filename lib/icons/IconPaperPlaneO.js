import * as React from "react";
class IconPaperPlaneO extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--paper-plane-o ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M39.4.2q.7.6.6 1.5L34.3 36q-.1.6-.7 1-.4.1-.7.1-.3 0-.6-.1l-11.7-4.8-6.7 7.3q-.4.5-1 .5-.4 0-.6-.1-.4-.1-.6-.5t-.3-.8V28.5L.9 24.2q-.8-.3-.9-1.3-.1-.8.7-1.3L37.9.2q.7-.5 1.5 0zm-7.7 33.5l5-29.5-32 18.4 7.5 3.1 19.2-14.3-10.6 17.8z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconPaperPlaneO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconPaperPlaneO;
//# sourceMappingURL=IconPaperPlaneO.js.map