import * as React from "react";
class IconDashcube extends React.Component {
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
                    React.createElement("path", { d: "m4.5 15.2q0-2.9 2-5.1t5-2.1h16.6l7.8-8v32.8q0 3-2 5.1t-5 2.1h-17.4q-2.9 0-5-2.1t-2-5.1v-17.6z m27.5 16.8l-3.9-4v-9.5q0-1-0.7-1.8t-1.8-0.7h-10.8q-1 0-1.7 0.7t-0.7 1.8v11q0 1 0.7 1.8t1.7 0.7h17.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconDashcube.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconDashcube;
//# sourceMappingURL=IconDashcube.js.map