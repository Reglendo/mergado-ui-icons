import * as React from "react";
class IconClipboard extends React.Component {
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
                    React.createElement("path", { d: "m17.1 37.1h20v-14.2h-9.2q-0.9 0-1.6-0.7t-0.6-1.5v-9.3h-8.6v25.7z m5.8-32.1v-1.4q0-0.3-0.3-0.5t-0.5-0.2h-15.7q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h15.7q0.3 0 0.5-0.2t0.3-0.5z m5.7 15h6.6l-6.6-6.7v6.7z m11.4 2.9v15q0 0.9-0.6 1.5t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.5v-3.6h-12.2q-0.9 0-1.5-0.6t-0.6-1.6v-30q0-0.8 0.6-1.5t1.5-0.6h24.3q0.9 0 1.5 0.6t0.7 1.5v7.4q0.4 0.3 0.8 0.6l9.1 9.1q0.6 0.6 1.1 1.7t0.4 2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconClipboard.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconClipboard;
//# sourceMappingURL=IconClipboard.js.map