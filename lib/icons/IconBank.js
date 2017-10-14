import * as React from "react";
class IconBank extends React.Component {
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
                    React.createElement("path", { d: "m19.9 1.4l20 8v2.6h-2.7q0 0.6-0.4 1t-1 0.4h-31.7q-0.6 0-1-0.4t-0.4-1h-2.7v-2.6z m-14.6 13.3h5.3v15.9h2.7v-15.9h5.3v15.9h2.7v-15.9h5.3v15.9h2.6v-15.9h5.3v15.9h1.3q0.6 0 1 0.4t0.4 1v1.3h-34.5v-1.3q0-0.6 0.4-1t1-0.4h1.2v-15.9z m33.1 19.9q0.6 0 1 0.4t0.5 0.9v2.7h-39.9v-2.7q0-0.5 0.4-0.9t1-0.4h37z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBank.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBank;
//# sourceMappingURL=IconBank.js.map