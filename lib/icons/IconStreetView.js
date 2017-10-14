import * as React from "react";
class IconStreetView extends React.Component {
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
                    React.createElement("path", { d: "M35.9 34.3q0 1.4-1.3 2.5t-3.7 1.8-5 1.1-5.7.3-5.6-.3-5.1-1.1-3.6-1.8-1.4-2.5q0-1.1.7-2t2.1-1.5 2.6-1 2.9-.6q.6-.1 1.1.2t.6.9q.1.6-.3 1.1t-.9.6q-1.3.2-2.3.5t-1.8.6-1 .5-.7.4-.1.3q0 .3.6.6t1.6.7 2.5.8 3.6.5 4.5.2 4.5-.2 3.6-.5 2.5-.8 1.7-.7.6-.6q0-.1-.2-.3t-.6-.4-1.1-.5-1.7-.6-2.4-.5q-.6-.1-.9-.6t-.2-1.1q0-.5.5-.9t1.1-.2q1.6.2 2.9.6t2.7 1 2 1.5.7 2zm-8.5-20v8.6q0 .5-.5 1t-1 .4h-1.4v8.6q0 .5-.4 1t-1 .4h-5.7q-.6 0-1-.4t-.5-1v-8.6h-1.4q-.6 0-1-.4t-.4-1v-8.6q0-1.2.8-2t2-.9h8.6q1.2 0 2 .9t.9 2zm-2.2-8.6q0 2.1-1.4 3.6t-3.6 1.4-3.5-1.4-1.5-3.6 1.5-3.5T20.2.7t3.6 1.5 1.4 3.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconStreetView.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconStreetView;
//# sourceMappingURL=IconStreetView.js.map