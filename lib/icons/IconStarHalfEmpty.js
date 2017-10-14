import * as React from "react";
class IconStarHalfEmpty extends React.Component {
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
                    React.createElement("path", { d: "m28 21.4l5.7-5.6-9.4-1.4-0.7-1.3-3.5-7.2v21.5l1.3 0.7 7.1 3.7-1.4-7.9-0.2-1.5z m10.1-5.9l-8.1 7.9 1.9 11.2q0.1 0.7-0.2 1.1t-0.7 0.4q-0.4 0-0.9-0.2l-10-5.3-10 5.3q-0.6 0.2-0.9 0.2-0.6 0-0.8-0.4t-0.1-1.1l1.9-11.2-8.1-7.9q-0.8-0.7-0.6-1.3t1.3-0.8l11.2-1.6 5-10.2q0.4-0.9 1.1-0.9 0.6 0 1.1 0.9l5 10.2 11.2 1.6q1 0.2 1.2 0.8t-0.5 1.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconStarHalfEmpty.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconStarHalfEmpty;
//# sourceMappingURL=IconStarHalfEmpty.js.map