import * as React from "react";
class IconCut extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--cut ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M21.4 20q.6 0 1 .4t.5 1-.5 1-1 .5-1-.5-.4-1 .4-1 1-.4zm6.7 1.4l11.3 8.9q.7.5.6 1.3-.1.7-.8 1.1l-2.8 1.4q-.3.2-.7.2-.4 0-.7-.2l-15.4-8.6-2.4 1.4q-.2.1-.3.2.3 1 .2 2.1-.1 1.7-1.2 3.3t-3 2.8q-2.9 1.8-6.2 1.8-3 0-4.9-1.7-2-1.9-1.8-4.6.2-1.7 1.3-3.3t2.9-2.8q2.9-1.8 6.2-1.8 1.9 0 3.4.6.2-.2.5-.4l2.7-1.7-2.7-1.6q-.3-.2-.5-.5-1.5.7-3.4.7-3.3 0-6.2-1.9-1.8-1.2-2.9-2.7T0 12.1q-.1-1.3.4-2.5t1.4-2.1q1.9-1.8 4.9-1.8 3.3 0 6.2 1.9 1.9 1.2 3 2.7t1.2 3.3q.1 1.1-.2 2.2.1 0 .3.1l2.4 1.5L35 8.8q.3-.2.7-.2.4 0 .7.1l2.8 1.5q.7.3.8 1.1.1.8-.6 1.3zm-15.2-5.8q1.1-.9.5-2.4T11 10.6Q9 9.3 6.7 9.3q-1.6 0-2.5.8-1 .9-.4 2.4t2.3 2.6q2.1 1.3 4.3 1.3 1.7 0 2.5-.8zM11 32.3q1.8-1.2 2.4-2.7t-.5-2.4q-.8-.8-2.5-.8-2.2 0-4.3 1.3-1.8 1.2-2.3 2.7t.4 2.4q.9.8 2.5.8 2.3 0 4.3-1.3zm4-13.7l2.1 1.3v-.3q0-.8.8-1.2l.3-.2-1.8-1.1-.6.6q0 .1-.2.3t-.2.2l-.1.1-.1.1zm5 5l2.1.7 16.5-12.9-2.9-1.4-17.1 9.6v2.5L15 24.3l.2.2.2.1q0 .1.2.3t.3.2l.5.6zm15.7 9.3l2.9-1.5L27 22.3l-4 3.1q0 .1-.3.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCut.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconCut;
//# sourceMappingURL=IconCut.js.map