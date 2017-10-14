import * as React from "react";
class IconBluetooth extends React.Component {
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
                    React.createElement("path", { d: "m21.8 23.5l3.3 3.3-3.4 3.3z m0-13.6l3.3 3.3-3.3 3.3z m-3 27.3l10.4-10.4-6.8-6.8 6.8-6.8-10.4-10.4v13.7l-5.6-5.7-2.1 2 7.1 7.2-7.1 7.2 2.1 2 5.6-5.6v13.6z m16.1-17.2q0 4.7-0.7 8.2t-2 5.7-3.1 3.6-4.1 2-4.9 0.5-4.9-0.5-4-2-3.1-3.6-2-5.7-0.7-8.2 0.7-8.2 2-5.7 3.1-3.6 4-2 4.9-0.5 4.9 0.5 4.1 2 3.1 3.6 2 5.7 0.7 8.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBluetooth.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBluetooth;
//# sourceMappingURL=IconBluetooth.js.map