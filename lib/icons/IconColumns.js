import * as React from "react";
class IconColumns extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--columns ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m5.1 34.3h13.5v-25.7h-14.2v25q0 0.3 0.2 0.5t0.5 0.2z m30.7-0.7v-25h-14.3v25.7h13.6q0.3 0 0.5-0.2t0.2-0.5z m2.8-27.2v27.2q0 1.4-1 2.5t-2.5 1h-30q-1.5 0-2.5-1t-1.1-2.5v-27.2q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconColumns.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconColumns;
//# sourceMappingURL=IconColumns.js.map