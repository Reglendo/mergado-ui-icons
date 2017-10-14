import * as React from "react";
class IconLevelDown extends React.Component {
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
                    React.createElement("path", { d: "m9.2 5.7h15.7q0.3 0 0.5 0.2t0.2 0.6v19.2h4.3q0.9 0 1.3 0.8t-0.2 1.6l-7.1 8.6q-0.4 0.4-1.1 0.4t-1.1-0.4l-7.1-8.6q-0.6-0.7-0.2-1.6 0.4-0.8 1.2-0.8h4.3v-14.3h-7.1q-0.3 0-0.6-0.2l-3.5-4.3q-0.3-0.3-0.1-0.8 0.2-0.4 0.6-0.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconLevelDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconLevelDown;
//# sourceMappingURL=IconLevelDown.js.map