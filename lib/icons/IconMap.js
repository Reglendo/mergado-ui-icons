import * as React from "react";
class IconMap extends React.Component {
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
                    React.createElement("path", { d: "m11.4 0q0.3 0 0.5 0.2t0.2 0.5v32.9q0 0.4-0.3 0.6l-10.7 5.7q-0.2 0.1-0.4 0.1-0.3 0-0.5-0.2t-0.2-0.5v-32.9q0-0.4 0.4-0.6l10.7-5.7q0.2-0.1 0.3-0.1z m27.9 0q0.3 0 0.5 0.2t0.2 0.5v32.9q0 0.4-0.4 0.6l-10.7 5.7q-0.1 0.1-0.3 0.1-0.3 0-0.5-0.2t-0.2-0.5v-32.9q0-0.4 0.3-0.6l10.8-5.7q0.1-0.1 0.3-0.1z m-25 0q0.2 0 0.3 0.1l11.4 5.7q0.4 0.2 0.4 0.6v32.9q0 0.3-0.2 0.5t-0.5 0.2q-0.2 0-0.3-0.1l-11.4-5.7q-0.4-0.2-0.4-0.6v-32.9q0-0.3 0.2-0.5t0.5-0.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconMap.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconMap;
//# sourceMappingURL=IconMap.js.map