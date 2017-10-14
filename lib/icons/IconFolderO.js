import * as React from "react";
class IconFolderO extends React.Component {
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
                    React.createElement("path", { d: "m35.8 29.3v-15.7q0-0.9-0.6-1.5t-1.6-0.7h-15.7q-0.9 0-1.5-0.6t-0.6-1.5v-1.4q0-0.9-0.6-1.6t-1.6-0.6h-7.1q-0.9 0-1.5 0.6t-0.6 1.6v21.4q0 0.9 0.6 1.5t1.5 0.6h27.1q0.9 0 1.6-0.6t0.6-1.5z m2.8-15.7v15.7q0 2-1.4 3.5t-3.6 1.5h-27.1q-2.1 0-3.5-1.5t-1.5-3.5v-21.4q0-2.1 1.5-3.6t3.5-1.4h7.1q2.1 0 3.6 1.4t1.4 3.6v0.7h15q2.1 0 3.6 1.4t1.4 3.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFolderO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFolderO;
//# sourceMappingURL=IconFolderO.js.map