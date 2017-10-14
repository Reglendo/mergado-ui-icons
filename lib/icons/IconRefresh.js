import * as React from "react";
class IconRefresh extends React.Component {
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
                    React.createElement("path", { d: "M36.7 23.6v.1q-1.4 6-6 9.7t-10.6 3.7q-3.3 0-6.4-1.2t-5.4-3.5l-2.9 2.9q-.4.4-1 .4t-1-.4-.4-1v-10q0-.6.4-1t1-.4h10q.6 0 1 .4t.5 1-.5 1l-3 3q1.6 1.5 3.6 2.3t4.1.8q3 0 5.6-1.4t4.2-4q.2-.4 1.2-2.6.1-.5.6-.5H36q.3 0 .5.2t.2.5zm.6-17.9v10q0 .6-.4 1t-1 .4h-10q-.6 0-1-.4t-.5-1 .5-1l3-3.1q-3.3-3-7.8-3-2.9 0-5.5 1.4t-4.2 4q-.2.4-1.2 2.6-.2.5-.6.5H4.1q-.3 0-.5-.2t-.2-.5v-.1q1.5-6 6-9.7t10.7-3.7q3.3 0 6.4 1.2t5.4 3.5l3-2.9q.4-.4 1-.4t1 .4.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconRefresh.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconRefresh;
//# sourceMappingURL=IconRefresh.js.map