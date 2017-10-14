import * as React from "react";
class IconUser extends React.Component {
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
                    React.createElement("path", { d: "m35.9 31.4q0 2.6-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.2 0.1-2.3t0.3-2.5 0.6-2.4 0.9-2.2 1.4-1.8 1.9-1.2 2.5-0.4q0.2 0 1 0.5t1.6 1 2.4 1.1 3 0.5 3-0.5 2.4-1.1 1.7-1 0.9-0.5q1.4 0 2.5 0.4t1.9 1.2 1.4 1.8 0.9 2.2 0.6 2.4 0.4 2.5 0 2.3z m-7.1-20q0 3.6-2.5 6.1t-6.1 2.5-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconUser.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconUser;
//# sourceMappingURL=IconUser.js.map