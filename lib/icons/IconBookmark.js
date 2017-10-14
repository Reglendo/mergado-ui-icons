import * as React from "react";
class IconBookmark extends React.Component {
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
                    React.createElement("path", { d: "m31.5 2.9q0.5 0 1 0.2 0.7 0.2 1.1 0.9t0.5 1.4v28.7q0 0.8-0.5 1.4t-1.1 0.9q-0.5 0.2-1 0.2-1.1 0-1.9-0.7l-9.8-9.5-9.9 9.5q-0.8 0.7-1.8 0.7-0.5 0-1-0.2-0.7-0.3-1.2-0.9t-0.4-1.4v-28.7q0-0.8 0.4-1.4t1.2-0.9q0.5-0.2 1-0.2h23.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBookmark.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBookmark;
//# sourceMappingURL=IconBookmark.js.map