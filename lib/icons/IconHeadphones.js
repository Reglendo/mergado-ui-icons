import * as React from "react";
class IconHeadphones extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--headphones ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M38.6 19.8q0 3.7-1.3 7l-.4 1.1-4.2.7q-.5 1.9-2 3.1t-3.5 1.2v.7q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5V20.7q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5v.7q1.6 0 2.9.8t2.1 2.2l1.5-.3q.7-2.1.7-4.3 0-3.3-2-6.3t-5.3-4.6-7-1.8T13 8.9t-5.2 4.6-2 6.3q0 2.2.6 4.3l1.6.2q.7-1.3 2-2.1t2.9-.8v-.7q0-.3.2-.5t.5-.2h1.5q.3 0 .5.2t.2.5v12.9q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-.7q-1.9 0-3.5-1.2t-2-3.1l-4.1-.7-.5-1.1q-1.3-3.3-1.3-7 0-3.4 1.5-6.5t4-5.4 5.9-3.7 7.2-1.3 7.1 1.3 6 3.7 4 5.4 1.5 6.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconHeadphones.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconHeadphones;
//# sourceMappingURL=IconHeadphones.js.map