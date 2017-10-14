import * as React from "react";
class IconCrosshairs extends React.Component {
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
                    React.createElement("path", { d: "M29.7 22.9h-2.4q-.6 0-1-.5t-.4-1v-2.8q0-.6.4-1t1-.5h2.4q-.7-2.4-2.5-4.2T23 10.4v2.5q0 .5-.4 1t-1 .4h-2.9q-.6 0-1-.4t-.4-1v-2.5q-2.4.7-4.2 2.5t-2.5 4.2H13q.6 0 1 .5t.4 1v2.8q0 .6-.4 1t-1 .5h-2.4q.7 2.4 2.5 4.2t4.2 2.5v-2.5q0-.5.4-1t1-.4h2.9q.6 0 1 .4t.4 1v2.5q2.4-.7 4.2-2.5t2.5-4.2zm7.6-4.3v2.8q0 .6-.4 1t-1 .5h-3.2q-.9 3.6-3.5 6.2T23 32.5v3.2q0 .6-.4 1t-1 .4h-2.9q-.6 0-1-.4t-.4-1v-3.2q-3.6-.8-6.2-3.4t-3.5-6.2H4.4q-.6 0-1-.5t-.4-1v-2.8q0-.6.4-1t1-.5h3.2q.8-3.6 3.5-6.2t6.2-3.4V4.3q0-.6.4-1t1-.4h2.9q.6 0 1 .4t.4 1v3.2q3.6.8 6.2 3.4t3.5 6.2h3.2q.5 0 1 .5t.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCrosshairs.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCrosshairs;
//# sourceMappingURL=IconCrosshairs.js.map