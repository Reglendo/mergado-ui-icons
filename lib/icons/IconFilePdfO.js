import * as React from "react";
class IconFilePdfO extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--file-pdf-o ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M35.8 8.5q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9H5.9v34.2h28.5zM23 23.9q.7.6 1.8 1.3 1.3-.2 2.6-.2 3.3 0 4 1.1.4.5 0 1.2v.1q-.2.8-1.6.8-1.1 0-2.6-.4t-2.9-1.2q-4.9.5-8.7 1.8-3.4 5.9-5.4 5.9-.4 0-.7-.2l-.5-.2q0-.1-.1-.2-.3-.2-.2-.8.2-.8 1.3-2t2.9-2.1q.3-.2.5.1.1 0 .1.1 1.1-1.9 2.4-4.4 1.5-3.1 2.3-5.9-.5-1.8-.7-3.5t.2-2.9q.2-.9.9-.9h.5q.5 0 .8.4.4.4.2 1.5-.1.1-.1.2v.8q0 2.8-.3 4.3 1.2 3.7 3.3 5.3zm-12.9 9.2q1.2-.6 3.1-3.5-1.2.8-2 1.8t-1.1 1.7zM19 12.5q-.4 1-.1 3 .1-.2.2-1 0-.1.1-.9.1-.1.1-.2v-.1q0-.5-.3-.8zm-2.8 14.8q3-1.2 6.4-1.8-.1 0-.3-.2t-.4-.3q-1.7-1.5-2.8-4-.6 2-1.9 4.4-.7 1.3-1 1.9zm14.4-.4q-.5-.5-3.1-.5 1.7.6 2.8.6h.4l-.1-.1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFilePdfO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconFilePdfO;
//# sourceMappingURL=IconFilePdfO.js.map