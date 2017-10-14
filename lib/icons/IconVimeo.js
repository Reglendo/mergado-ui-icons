import * as React from "react";
class IconVimeo extends React.Component {
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
                    React.createElement("path", { d: "M38.1 11.6q-.2 5.2-7.4 14.5-7.4 9.6-12.5 9.6-3.2 0-5.4-5.9-.9-3.5-2.9-10.7-1.6-5.9-3.5-5.9-.4 0-2.9 1.7l-1.7-2.2q.6-.4 2.4-2.1T7.1 8q3.5-3.1 5.4-3.2 2.1-.2 3.4 1.2t1.8 4.5q1 6.4 1.5 8.4 1.2 5.5 2.7 5.5 1.1 0 3.4-3.6t2.5-5.5q.3-3.1-2.5-3.1-1.2 0-2.7.6Q25.3 4 32.9 4.3q5.6.2 5.2 7.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconVimeo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconVimeo;
//# sourceMappingURL=IconVimeo.js.map