import * as React from "react";
class IconRetweet extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--retweet ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M26.6 32.6q0 .3-.2.5t-.5.2H6q-.2 0-.3-.1t-.2-.1-.1-.2-.1-.2 0-.2V20h-4q-.5 0-.9-.4t-.4-.9q0-.5.3-.9l6.7-8q.4-.4 1-.4t1 .4l6.6 8q.3.4.3.9t-.3.9-1 .4h-4v8h12q.3 0 .5.2l3.3 4q.2.2.2.4zM39.9 24q0 .5-.3.8l-6.7 8q-.4.5-1 .5t-1-.5l-6.7-8q-.3-.3-.3-.8 0-.6.4-.9t.9-.4h4v-8H17.3q-.4 0-.5-.3l-3.4-3.9q-.1-.2-.1-.5 0-.2.2-.4t.5-.2h20.2q.1 0 .2.2t.1.1 0 .3.1.2v12.5h3.9q.6 0 1 .4t.4.9z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconRetweet.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconRetweet;
//# sourceMappingURL=IconRetweet.js.map