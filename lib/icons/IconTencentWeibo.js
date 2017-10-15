import * as React from "react";
class IconTencentWeibo extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--tencent-weibo ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M24.3 12.8q0 1.8-1.3 3t-3 1.3q-1.4 0-2.5-.8-1.4 1.5-2.6 3.3-5.5 8.2-4.5 19.1.1.5-.2.9t-.8.4h-.1q-.5 0-.8-.3t-.4-.8q-.3-2.8-.1-5.5t.7-4.8 1.2-4.2 1.5-3.4 1.7-2.8q1.3-2 2.9-3.7-.3-.8-.3-1.7 0-1.8 1.2-3.1T20 8.5t3 1.2 1.3 3.1zm8.5.2q0 3.5-1.7 6.5t-4.8 4.8-6.5 1.7q-1.4 0-2.9-.3-.5-.1-.8-.5t-.1-.9q.1-.5.5-.7t.9-.2q1.1.3 2.4.3 2.2 0 4.1-.8t3.5-2.3 2.2-3.4.9-4.2-.9-4.1-2.2-3.5-3.5-2.2-4.1-.9-4.2.9-3.4 2.2-2.3 3.5-.8 4.1q0 2.6 1.2 4.9.2.4 0 .9t-.5.6-.9.1-.7-.6Q6.8 16.2 6.8 13q0-2.6 1-5.1t2.8-4.1T14.7 1t5.1-1q3.5 0 6.5 1.7t4.8 4.8 1.7 6.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTencentWeibo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTencentWeibo;
//# sourceMappingURL=IconTencentWeibo.js.map