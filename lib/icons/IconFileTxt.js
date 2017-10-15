import * as React from "react";
class IconFileTxt extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--file-txt ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M35.8 8.5c.4.4.733.967 1 1.7s.433 1.367.5 1.9v25.8c0 .533-.2 1.033-.6 1.5-.4.467-.933.667-1.6.6h-30c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5V2.1c0-.533.2-1.033.6-1.5.4-.467.9-.667 1.5-.6h20c.6 0 1.267.133 2 .4.733.267 1.3.633 1.7 1.1zM25.9 3v8.4h8.4c-.2-.4-.367-.7-.5-.9l-7-7c-.2-.133-.5-.3-.9-.5zm8.5 34.1V14.3h-9.3c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.933-.6-1.6V2.9H5.9v34.2z" }),
                    React.createElement("path", { d: "M19.091 27.638v1.715h1.99v1.381h-1.99v2.563q0 .42.168.572.167.145.663.145h.993v1.381h-1.656q-1.144 0-1.624-.474-.475-.48-.475-1.624v-2.563h-.96v-1.38h.96v-1.716h1.931zm4.704 4.666l-2.179-2.95h2.045l1.235 1.79 1.251-1.79h2.045l-2.18 2.94 2.288 3.101h-2.045l-1.36-1.91-1.342 1.91h-2.045l2.287-3.09zm7.704-4.666v1.715h1.99v1.381H31.5v2.563q0 .42.167.572.167.145.663.145h.993v1.381h-1.656q-1.144 0-1.624-.474-.475-.48-.475-1.624v-2.563h-.96v-1.38h.96v-1.716H31.5z", style: { "lineHeight": "125%", "textAlign": "end" }, "font-weight": "400", "font-size": "58.922", "font-family": "sans-serif", "letter-spacing": "0", "word-spacing": "0", "text-anchor": "end" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFileTxt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFileTxt;
//# sourceMappingURL=IconFileTxt.js.map