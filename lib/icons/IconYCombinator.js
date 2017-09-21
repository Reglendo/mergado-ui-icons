import * as React from "react";
class IconYCombinator extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--y-combinator ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m21.1 22.4l5.9-11.1h-2.5l-3.5 6.9q-0.5 1.1-1 2.1l-0.9-2.1-3.5-6.9h-2.7l5.9 11v7.2h2.3v-7.1z m16.2-19.5v34.2h-34.3v-34.2h34.3z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconYCombinator.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconYCombinator;
//# sourceMappingURL=IconYCombinator.js.map