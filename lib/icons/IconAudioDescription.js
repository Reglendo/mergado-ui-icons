import * as React from "react";
class IconAudioDescription extends React.Component {
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
                    React.createElement("path", { d: "m8.8 21.7h3l0-4.6z m18-1.7q0-1.5-0.9-2.5t-2.6-0.9h-0.9v6.8h0.9q1.6 0 2.5-1t1-2.4z m-10.1-6.6l0.1 13.2q0 0.3-0.2 0.4t-0.4 0.2h-3.8q-0.3 0-0.4-0.2t-0.2-0.4v-1.1h-5.1l-0.9 1.5q-0.2 0.2-0.5 0.2h-4.7q-0.4 0-0.5-0.3t0-0.6l9.8-13.3q0.1-0.2 0.4-0.2h5.8q0.3 0 0.5 0.2t0.1 0.4z m14.5 6.6q0 3.4-2.2 5.3t-5.7 1.9h-4.7q-0.2 0-0.4-0.2t-0.2-0.4v-13.2q0-0.3 0.2-0.4t0.4-0.2h4.7q3.5 0 5.7 1.9t2.2 5.3z m2.7 0q0 0.2 0 0.5t-0.1 1.3-0.4 1.7-0.8 1.9-1.2 1.8h-0.9q0.6-0.8 1.1-1.8t0.8-2 0.3-1.7 0.2-1.2l0-0.5q0-0.2 0-0.4t-0.1-1.1-0.4-1.6-0.7-1.9-1.2-2.2h0.8q0.7 0.8 1.2 1.9t0.8 1.9 0.4 1.7 0.2 1.2z m3.3 0q0 0.2 0 0.5t-0.2 1.3-0.4 1.7-0.7 1.9-1.3 1.8h-0.9q0.6-0.8 1.1-1.8t0.8-2 0.3-1.7 0.2-1.2l0-0.5q0-0.2 0-0.4t-0.1-1.1-0.4-1.6-0.7-1.9-1.1-2.2h0.7q0.7 0.8 1.3 1.9t0.8 1.9 0.4 1.7 0.1 1.2z m3.1 0q0 0.2 0 0.5t-0.1 1.3-0.4 1.7-0.8 1.9-1.3 1.8h-0.8q0.6-0.8 1.1-1.8t0.7-2 0.4-1.7 0.2-1.2l0-0.5q0-0.2 0-0.4t-0.2-1.1-0.3-1.6-0.7-1.9-1.2-2.2h0.8q0.7 0.8 1.2 1.9t0.8 1.9 0.4 1.7 0.2 1.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconAudioDescription.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconAudioDescription;
//# sourceMappingURL=IconAudioDescription.js.map