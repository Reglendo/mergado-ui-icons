import * as React from "react";
class IconList extends React.Component {
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
                    React.createElement("path", { d: "m5.7 29.3v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m0-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m0-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.2 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m34.3 17.2v4.3q0 0.3-0.2 0.5t-0.5 0.2h-30q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h30q0.3 0 0.5 0.2t0.2 0.5z m-34.3-25.7v4.3q0 0.2-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m34.3 17.1v4.3q0 0.3-0.2 0.5t-0.5 0.2h-30q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h30q0.3 0 0.5 0.2t0.2 0.5z m0-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-30q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.2 0.2-0.5t0.5-0.2h30q0.3 0 0.5 0.2t0.2 0.5z m0-8.5v4.3q0 0.2-0.2 0.5t-0.5 0.2h-30q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h30q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconList.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconList;
//# sourceMappingURL=IconList.js.map