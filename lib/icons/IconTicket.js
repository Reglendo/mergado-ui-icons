import * as React from "react";
class IconTicket extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--ticket ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M22.9 10.1l7 7-12.8 12.8-7-7zm-4.8 21.8l13.8-13.8q.5-.4.5-1t-.5-1l-8-8q-.4-.4-1-.4t-1 .4L8.1 21.9q-.5.4-.5 1t.5 1l8 8q.4.4 1 .4t1-.4zM38 17.7L17.7 38q-.8.8-2 .8t-2-.8l-2.8-2.8q1.2-1.3 1.2-3.1t-1.2-3-3-1.2-3.1 1.2L2 26.3q-.8-.8-.8-2t.8-2L22.3 2q.8-.8 2-.8t2 .8l2.8 2.8q-1.2 1.3-1.2 3.1t1.2 3 3 1.2 3.1-1.2l2.8 2.8q.8.8.8 2t-.8 2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTicket.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTicket;
//# sourceMappingURL=IconTicket.js.map