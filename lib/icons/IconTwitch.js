import * as React from "react";
class IconTwitch extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--twitch ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20 9.7v9.7h-3.2v-9.7h3.2z m8.9 0v9.7h-3.3v-9.7h3.3z m0 17l5.6-5.7v-17.8h-26.6v23.4h7.3v4.9l4.8-4.9h8.9z m8.9-26.7v22.6l-9.7 9.7h-7.3l-4.8 4.8h-4.9v-4.8h-8.9v-25.8l2.5-6.5h33.1z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconTwitch.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconTwitch;
//# sourceMappingURL=IconTwitch.js.map