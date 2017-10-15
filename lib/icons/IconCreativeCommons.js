import * as React from "react";
class IconCreativeCommons extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--creative-commons ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M13.5 27.5q3.4 0 5.7-2.3.4-.4.1-.8l-1-1.8q-.1-.3-.5-.4-.4-.1-.6.2l-.1.1q-.1.1-.3.2t-.4.3-.5.3-.6.3-.8.3-.8 0q-1.7 0-2.8-1.1T9.8 20q0-1.7 1.1-2.8t2.7-1.1q.8 0 1.6.3t1.1.6l.4.3q.2.3.6.2.3 0 .5-.3l1.2-1.7q.3-.5-.1-.9 0-.1-.2-.2t-.7-.6-1.1-.6-1.5-.5-1.9-.2q-3.3 0-5.5 2.1T5.8 20q0 3.3 2.2 5.4t5.5 2.1zm14.1 0q3.4 0 5.7-2.3.3-.4.1-.8l-1-1.8q-.2-.3-.6-.4-.3-.1-.6.2l-.1.1-.2.2q-.1.1-.4.3t-.5.3-.7.3-.7.3-.9 0q-1.7 0-2.7-1.1T23.9 20q0-1.7 1-2.8t2.8-1.1q.8 0 1.6.3t1.1.6l.3.3q.3.3.6.2.4 0 .6-.3l1.1-1.7q.3-.5 0-.9-.1-.1-.3-.2t-.6-.6-1.1-.6-1.5-.5-1.9-.2q-3.3 0-5.5 2.1T19.9 20q0 3.3 2.1 5.4t5.6 2.1zM20 3.6q-3.3 0-6.4 1.3T8.4 8.4t-3.5 5.2T3.6 20t1.3 6.4 3.5 5.2 5.2 3.5 6.4 1.3 6.4-1.3 5.2-3.5 3.5-5.2 1.3-6.4-1.3-6.4-3.5-5.2-5.2-3.5T20 3.6zM20 0q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4T40 20t-1.6 7.8-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCreativeCommons.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCreativeCommons;
//# sourceMappingURL=IconCreativeCommons.js.map