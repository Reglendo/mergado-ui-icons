import * as React from "react";
class IconInfo extends React.Component {
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
                    React.createElement("path", { d: "M27.3 30v2.9q0 .5-.4 1t-1 .4H14.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h1.5V20h-1.5q-.6 0-1-.4t-.4-1v-2.9q0-.6.4-1t1-.4H23q.6 0 1 .4t.4 1v12.9h1.5q.5 0 1 .4t.4 1zM24.4 4.3v4.3q0 .6-.4 1t-1 .4h-5.7q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4H23q.6 0 1 .4t.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconInfo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconInfo;
//# sourceMappingURL=IconInfo.js.map