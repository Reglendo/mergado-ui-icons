import * as React from "react";
class IconBraille extends React.Component {
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
                    React.createElement("path", { d: "m3.5 25.2q-1.2 0-2.1 0.9t-0.8 2.1 0.8 2 2.1 0.9 2.1-0.9 0.8-2-0.8-2.1-2.1-0.9z m9.3 0q-1.2 0-2 0.9t-0.9 2.1 0.9 2 2 0.9 2.1-0.9 0.8-2-0.8-2.1-2.1-0.9z m0-9.3q-1.2 0-2 0.9t-0.9 2 0.9 2.1 2 0.8 2.1-0.8 0.8-2.1-0.8-2-2.1-0.9z m14 9.3q-1.2 0-2 0.9t-0.9 2.1 0.9 2 2 0.9 2.1-0.9 0.8-2-0.8-2.1-2.1-0.9z m9.4 0q-1.3 0-2.1 0.9t-0.9 2.1 0.9 2 2.1 0.9 2-0.9 0.9-2-0.9-2.1-2-0.9z m-9.4-9.3q-1.2 0-2 0.9t-0.9 2 0.9 2.1 2 0.8 2.1-0.8 0.8-2.1-0.8-2-2.1-0.9z m9.4 0q-1.3 0-2.1 0.9t-0.9 2 0.9 2.1 2.1 0.8 2-0.8 0.9-2.1-0.9-2-2-0.9z m0-9.3q-1.3 0-2.1 0.8t-0.9 2.1 0.9 2.1 2.1 0.8 2-0.8 0.9-2.1-0.9-2.1-2-0.8z m-29.2 21.6q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5z m9.3 0q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5z m-9.3-9.4q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4z m9.3 0q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4z m-9.3-9.3q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5z m23.3 18.7q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5z m-14-18.7q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5z m23.3 18.7q0 1.4-1 2.4t-2.4 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.4 1 1 2.5z m-9.3-9.4q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4z m9.4 0q0 1.5-1.1 2.5t-2.4 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.4 1.1 1 2.4z m-9.4-9.3q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5z m9.4 0q0 1.5-1.1 2.5t-2.4 1-2.5-1-1-2.5 1-2.5 2.5-1 2.4 1 1 2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBraille.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBraille;
//# sourceMappingURL=IconBraille.js.map