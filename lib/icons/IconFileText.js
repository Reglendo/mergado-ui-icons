import * as React from "react";
class IconFileText extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--file-text ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M35.8 10.6q.3.3.6.8H25.9V.9l.8.6zm-10.7 3.7h12.2v23.6q0 .9-.6 1.5t-1.6.6h-30q-.8 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0H23v12.1q0 .9.6 1.6t1.5.6zm3.6 16.4v-1.4q0-.3-.2-.5t-.5-.2H12.3q-.3 0-.5.2t-.2.5v1.4q0 .3.2.5t.5.2H28q.3 0 .5-.2t.2-.5zm0-5.7v-1.4q0-.3-.2-.5t-.5-.2H12.3q-.3 0-.5.2t-.2.5V25q0 .3.2.5t.5.2H28q.3 0 .5-.2t.2-.5zm0-5.7v-1.4q0-.4-.2-.6t-.5-.2H12.3q-.3 0-.5.2t-.2.6v1.4q0 .3.2.5t.5.2H28q.3 0 .5-.2t.2-.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFileText.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconFileText;
//# sourceMappingURL=IconFileText.js.map