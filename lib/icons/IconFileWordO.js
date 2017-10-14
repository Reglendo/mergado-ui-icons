import * as React from "react";
class IconFileWordO extends React.Component {
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
                    React.createElement("path", { d: "M35.8 8.5q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9H5.9v34.2h28.5zm-26.2-20v2.4h1.6l3.6 14.8H17l2.8-10.8q.2-.5.3-1.1v-.5h.1l.1.5v.5q0 .4.2.6l2.8 10.8h3.6l3.6-14.8h1.6v-2.4h-6.7v2.4h2l-2.2 9.8-.2 1v.5h-.1l-.1-.5q0-.1-.1-.4t-.1-.6l-3.2-12.2h-2.5l-3.2 12.2q-.1.2-.1.6t-.1.4l-.1.5h-.1v-.5l-.2-1-2.2-9.8h2v-2.4H8.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFileWordO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFileWordO;
//# sourceMappingURL=IconFileWordO.js.map