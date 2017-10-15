import * as React from "react";
class IconShareAlt extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--share-alt ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M30.1 22.9q3 0 5.1 2t2.1 5.1-2.1 5.1-5.1 2-5-2T23 30v-.8l-8-4q-2 1.9-4.9 1.9-2.9 0-5-2T3 20t2.1-5.1 5-2q2.9 0 4.9 1.9l8-4V10q0-3 2.1-5.1t5-2 5.1 2 2.1 5.1-2.1 5.1-5.1 2q-2.8 0-4.8-1.9l-8.1 4q.1.5.1.8t-.1.8l8.1 4q2-1.9 4.8-1.9z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconShareAlt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconShareAlt;
//# sourceMappingURL=IconShareAlt.js.map