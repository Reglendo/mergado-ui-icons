import * as React from "react";
class IconExpand extends React.Component {
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
                    React.createElement("path", { d: "M19.9 23.6q0 .3-.3.5l-7.4 7.4 3.2 3.2q.5.4.5 1t-.5 1-1 .4h-10q-.6 0-1-.4t-.4-1v-10q0-.6.4-1t1-.4 1 .4l3.2 3.2 7.5-7.4q.2-.2.5-.2t.5.2l2.5 2.6q.3.2.3.5zM37.3 4.3v10q0 .6-.4 1t-1 .4-1-.4l-3.3-3.2-7.4 7.4q-.2.2-.5.2t-.5-.2l-2.5-2.6q-.3-.2-.3-.5t.3-.5l7.4-7.4-3.2-3.2q-.5-.4-.5-1t.5-1 1-.4h10q.5 0 1 .4t.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconExpand.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconExpand;
//# sourceMappingURL=IconExpand.js.map