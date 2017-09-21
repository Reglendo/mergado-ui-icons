import * as React from "react";
class IconArrowCircleODown extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--arrow-circle-o-down ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28 20.7q0 0.3-0.2 0.6l-7.1 7.1q-0.3 0.2-0.6 0.2t-0.5-0.2l-7.1-7.2q-0.3-0.3-0.2-0.8 0.2-0.4 0.7-0.4h4.3v-7.9q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v7.9h4.3q0.3 0 0.5 0.2t0.2 0.5z m-7.9-12.8q-3.3 0-6.1 1.6t-4.4 4.4-1.6 6.1 1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1-1.6-6.1-4.5-4.4-6.1-1.6z m17.2 12.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconArrowCircleODown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconArrowCircleODown;
//# sourceMappingURL=IconArrowCircleODown.js.map