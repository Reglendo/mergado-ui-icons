import * as React from "react";
class IconRandom extends React.Component {
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
                    React.createElement("path", { d: "M14.9 10.7q-1.4 2.1-3.1 6.1l-.8-1.6q-.3-.6-.9-1.4t-1.2-1.3-1.4-.7-1.8-.4h-5q-.3 0-.5-.2t-.2-.5V6.4q0-.3.2-.5t.5-.2h5q5.6 0 9.2 5zM40 28.6q0 .3-.2.5l-7.1 7.1q-.2.2-.6.2-.2 0-.5-.2t-.2-.5v-4.3h-1.9q-1.2 0-1.8.1t-1.6-.1-1.6-.1-1.4-.2-1.4-.4-1.3-.7-1.3-.8-1.3-1.2-1.2-1.6q1.3-2.1 3-6.1l.8 1.6q.3.6 1 1.4t1.1 1.3 1.4.8 1.8.3h5.7v-4.3q0-.3.2-.5t.5-.2q.3 0 .6.2l7.1 7.2q.2.2.2.5zm0-20q0 .3-.2.5l-7.1 7.1q-.2.2-.6.2-.2 0-.5-.2t-.2-.5v-4.3h-5.7q-1.1 0-1.9.4t-1.6 1-1.1 1.3-1 1.8q-.7 1.4-1.7 3.8-.7 1.5-1.2 2.5T16 24.5t-1.4 2.2-1.6 1.9-2.1 1.5-2.3 1-2.9.3h-5q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h5q1.1 0 2-.3t1.5-1 1.1-1.4 1-1.7q.8-1.4 1.8-3.8.6-1.5 1.1-2.5t1.2-2.4 1.4-2.2 1.7-1.9 2-1.5 2.4-.9 2.8-.4h5.7V1.4q0-.3.2-.5t.5-.2q.3 0 .6.2l7.1 7.2q.2.2.2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconRandom.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconRandom;
//# sourceMappingURL=IconRandom.js.map