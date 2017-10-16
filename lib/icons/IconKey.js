import * as React from "react";
class IconKey extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--key ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M19.6 11.4q0-1.8-1.3-3t-3-1.3-3.1 1.3-1.2 3q0 1 .4 1.9-.9-.4-1.8-.4-1.8 0-3.1 1.2t-1.2 3 1.2 3.1 3.1 1.2 3-1.2 1.3-3.1q0-.9-.5-1.8.9.4 1.9.4 1.8 0 3-1.2t1.3-3.1zm19 15.7q0 .4-1.1 1.5T36 29.7q-.2 0-.6-.3t-.9-.8-.8-.9-.6-.6L31 29.3l4.9 4.9q.6.6.6 1.5 0 1-.8 1.8t-1.8.9q-.9 0-1.6-.6l-14.9-15q-4 2.9-8.2 2.9-3.6 0-5.9-2.3T1 17.5q0-3.6 2.1-7T8.7 5t6.9-2.1q3.7 0 6 2.2t2.3 6q0 4.2-3 8.1l8 7.9L31 25q-.1-.1-.6-.5t-.9-.9-.7-.8-.4-.7q0-.3 1.1-1.4t1.5-1.1q.3 0 .5.2l1 1q.9.9 1.9 1.8t1.9 1.9 1.6 1.7.7.9z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconKey.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconKey;
//# sourceMappingURL=IconKey.js.map