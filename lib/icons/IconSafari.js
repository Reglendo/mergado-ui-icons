import * as React from "react";
class IconSafari extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--safari ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M21.2 19.9q0 .6-.4 1t-.9.5q-.6 0-1-.4t-.4-.9q0-.6.3-1t1-.5 1 .4.4.9zm.3 1.3l7.8-12.9q-.2.1-1.5 1.4T25 12.3t-3 2.8-2.6 2.5-1.2 1.1l-7.8 13q.2-.2 1.5-1.4t2.9-2.6 3-2.9 2.6-2.4 1.1-1.2zM36 20q0 4.5-2.4 8.3 0-.1-.3-.3t-.6-.3-.4-.2q-.3 0-.3.3 0 .2 1.3 1-1.6 2.5-4.1 4.2t-5.4 2.5l-.3-1.5q-.1-.2-.4-.2-.1 0-.2.1t0 .2l.4 1.5q-1.6.4-3.3.4-4.4 0-8.3-2.4l.3-.4q.3-.4.5-.8t.2-.4q0-.3-.3-.3-.1 0-.4.3t-.5.8-.3.5q-2.5-1.7-4.3-4.2t-2.4-5.4l1.5-.4q.2 0 .2-.3 0-.1-.1-.2t-.2 0l-1.5.3Q4 21.5 4 20q0-4.6 2.5-8.5 0 .1.4.3t.7.4.3.2q.3 0 .3-.3 0-.1-.2-.3t-.8-.5l-.4-.3Q8.5 8.5 11 6.8t5.4-2.4l.4 1.5q0 .3.3.3.1 0 .2-.2t0-.2L17 4.3q1.6-.3 3-.3 4.6 0 8.5 2.5-.9 1.2-.9 1.4 0 .3.3.3.2 0 1-1.4 2.5 1.7 4.2 4.1t2.4 5.4l-1.2.3q-.3 0-.3.3 0 .2.2.2t.2.1l1.2-.3q.4 1.6.4 3.1zm1.9 0q0-3.6-1.5-6.9t-3.8-5.7-5.7-3.8T20 2.1t-6.9 1.5-5.7 3.8-3.8 5.7T2.1 20t1.5 6.9 3.8 5.7 5.7 3.8 6.9 1.5 6.9-1.5 5.7-3.8 3.8-5.7 1.5-6.9zm2.1 0q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0t7.8 1.6 6.4 4.2 4.2 6.4T40 20z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconSafari.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconSafari;
//# sourceMappingURL=IconSafari.js.map