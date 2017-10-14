import * as React from "react";
class IconSortAmountDesc extends React.Component {
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
                    React.createElement("path", { d: "m26.5 34.6v4.2q0 0.3-0.2 0.5t-0.5 0.2h-5.6q-0.3 0-0.5-0.2t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.2h5.6q0.3 0 0.5 0.2t0.2 0.5z m-10.5-2.8q0 0.3-0.2 0.6l-6.9 6.9q-0.3 0.2-0.5 0.2-0.3 0-0.5-0.2l-7-7q-0.3-0.3-0.2-0.7 0.2-0.4 0.7-0.4h4.2v-30q0-0.3 0.2-0.5t0.5-0.2h4.2q0.3 0 0.5 0.2t0.2 0.5v30h4.1q0.3 0 0.5 0.1t0.2 0.5z m14.7-8.3v4.2q0 0.3-0.2 0.5t-0.5 0.2h-9.8q-0.3 0-0.5-0.2t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.2h9.8q0.3 0 0.5 0.2t0.2 0.5z m4.1-11.2v4.2q0 0.3-0.2 0.5t-0.5 0.2h-13.9q-0.3 0-0.5-0.2t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.2h13.9q0.4 0 0.5 0.2t0.2 0.5z m4.2-11.1v4.2q0 0.3-0.2 0.5t-0.5 0.2h-18.1q-0.3 0-0.5-0.2t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.2h18.1q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconSortAmountDesc.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconSortAmountDesc;
//# sourceMappingURL=IconSortAmountDesc.js.map