import * as React from "react";
class IconHandGrabO extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--hand-grab-o ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M20.1 8.6q-1.1 0-2 .8t-.8 2v2.9h-.7v-2.1q0-1.1-.7-1.8t-1.8-.8q-1.1 0-1.8.8t-.7 1.7v9.6l-.7-.7v-3.8q0-1.1-.8-1.8t-1.7-.8q-1.1 0-1.8.8t-.7 1.7v5q0 1.1.7 1.9l7 6.6q.8.8.8 2.3 0 .5.5 1t1 .4h14.2q.6 0 1-.4t.5-1v-.6q0-.9.2-1.7l2.4-9.8q.2-.8.2-1.7v-5.5q0-1-.7-1.8t-1.8-.7q-1 0-1.7.7t-.8 1.8v.7h-.7v-2.8q0-.9-.5-1.6T26.7 9q-.3-.1-.5-.1-1 0-1.8.8t-.7 1.7v2.9H23v-2.7q0-1.2-.7-2t-1.9-1h-.3zm0-2.9q1.9 0 3.4 1.1 1.2-.7 2.7-.7 1.3 0 2.5.6t1.9 1.7q.6-.2 1.3-.2 2.3 0 3.8 1.6t1.6 3.8v5.5q0 1.2-.3 2.4l-2.4 9.8q-.2.5-.2 1.6 0 1.7-1.2 3t-3.1 1.2H15.9q-1.9 0-3.1-1.3t-1.2-3.1L4.7 26Q3 24.4 3 22.1v-5q0-2.2 1.6-3.7t3.8-1.6h.3q.1-2.1 1.7-3.6t3.7-1.4q1.1 0 2.2.5 1.6-1.6 3.8-1.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconHandGrabO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconHandGrabO;
//# sourceMappingURL=IconHandGrabO.js.map