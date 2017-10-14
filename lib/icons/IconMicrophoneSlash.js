import * as React from "react";
class IconMicrophoneSlash extends React.Component {
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
                    React.createElement("path", { d: "M10.6 21.1l-2.3 2.2q-.9-2.3-.9-4.7v-2.9q0-.6.4-1t1-.4 1 .4.4 1v2.9q0 1.2.3 2.5zM35.4 7.7l-8 8v2.9q0 2.9-2.1 5t-5.1 2.1q-1.2 0-2.4-.4l-2.2 2.1q2.2 1.2 4.6 1.2 4.1 0 7.1-3t2.9-7v-2.9q0-.6.4-1t1-.4 1 .4.5 1v2.9q0 4.9-3.3 8.6t-8.2 4.1v3h5.8q.5 0 1 .4t.4 1-.4 1-1 .4H13.1q-.6 0-1-.4t-.5-1 .5-1 1-.4h5.7v-3q-2.8-.2-5.3-1.8l-5.6 5.7q-.3.2-.5.2t-.6-.2L5 33.4q-.2-.3-.2-.5t.2-.6L32.6 4.8q.2-.2.5-.2t.5.2l1.8 1.8q.2.3.2.5t-.2.6zm-8.5-3L13.1 18.6V7.1q0-2.9 2.1-5t5-2.1q2.3 0 4.1 1.3t2.6 3.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconMicrophoneSlash.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconMicrophoneSlash;
//# sourceMappingURL=IconMicrophoneSlash.js.map