import * as React from "react";
class IconSteamSquare extends React.Component {
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
                    React.createElement("path", { d: "m30.7 14.4q0-1.7-1.2-3t-3.1-1.3-3.1 1.3-1.2 3q0 1.8 1.2 3.1t3.1 1.2 3.1-1.2 1.2-3.1z m-13.6 13.2q0 1.8-1.3 3.1t-3.1 1.3q-1.3 0-2.3-0.7t-1.6-1.7q1.1 0.5 2.2 0.9 1.3 0.5 2.6 0t1.9-2q0.6-1.3 0-2.6t-1.9-1.9l-1.8-0.7q0.4-0.2 0.9-0.2 1.8 0 3.1 1.3t1.3 3.2z m20.2-18.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-3.4l3.8 1.5q0.5 2.1 2.1 3.4t3.8 1.4q2.3 0 4-1.6t2-3.9l7.7-5.6q3.3 0 5.7-2.3t2.3-5.7q0-3.4-2.3-5.7t-5.7-2.4q-3.3 0-5.7 2.4t-2.4 5.6l-5 7.2q-0.2 0-0.6 0-1.7 0-3.1 0.8l-6.6-2.7v-10.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z m-5.5 5.2q0 2.2-1.6 3.8t-3.8 1.6-3.8-1.6-1.6-3.8 1.6-3.8 3.8-1.6q2.2 0 3.8 1.6t1.6 3.8z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconSteamSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconSteamSquare;
//# sourceMappingURL=IconSteamSquare.js.map