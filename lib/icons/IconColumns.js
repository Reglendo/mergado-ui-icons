import * as React from "react";
class IconColumns extends React.Component {
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
                    React.createElement("path", { d: "m5.1 34.3h13.5v-25.7h-14.2v25q0 0.3 0.2 0.5t0.5 0.2z m30.7-0.7v-25h-14.3v25.7h13.6q0.3 0 0.5-0.2t0.2-0.5z m2.8-27.2v27.2q0 1.4-1 2.5t-2.5 1h-30q-1.5 0-2.5-1t-1.1-2.5v-27.2q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconColumns.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconColumns;
//# sourceMappingURL=IconColumns.js.map