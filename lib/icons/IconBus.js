import * as React from "react";
class IconBus extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--bus ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M11.6 27.1q0-1.1-.9-2t-2-.8-2 .8-.8 2 .8 2.1 2 .8 2-.8.9-2.1zm22.8 0q0-1.1-.8-2t-2-.8-2 .8-.9 2 .9 2.1 2 .8 2-.8.8-2.1zm-1-8.8l-1.6-8.6q-.1-.5-.5-.8t-.9-.3H9.9q-.5 0-.9.3t-.5.8l-1.6 8.6q-.1.7.3 1.2t1.1.5H32q.7 0 1.1-.5t.3-1.2zm-5-13.7q0-.4-.4-.7t-.7-.3H13q-.4 0-.8.3t-.3.7.3.8.8.3h14.3q.4 0 .7-.3t.4-.8zm8.9 16.2v13.5h-2.9v2.8q0 1.2-.8 2.1t-2 .8-2-.8-.9-2.1v-2.8H11.6v2.8q0 1.2-.9 2.1t-2 .8-2-.8-.8-2.1v-2.8H3V20.8q0-2.5.6-5L5.9 5.7Q6.1 4 8 2.7t5.2-2 6.9-.7 7 .7 5.2 2 2.1 3l2.4 10.1q.5 2.3.5 5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBus.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBus;
//# sourceMappingURL=IconBus.js.map