import * as React from "react";
class IconTrashO extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--trash-o ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M15.9 16.4v12.9q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5V16.4q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm5.7 0v12.9q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5V16.4q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm5.8 0v12.9q0 .3-.2.5t-.6.2h-1.4q-.3 0-.5-.2t-.2-.5V16.4q0-.3.2-.5t.5-.2h1.4q.4 0 .6.2t.2.5zm2.8 16.2V11.4h-20v21.2q0 .5.2.9t.3.6.2.2h18.6q.1 0 .2-.2t.4-.6.1-.9zm-15-24h10L24.1 6q-.1-.2-.3-.3h-7.1q-.2.1-.4.3zm20.7.7v1.4q0 .3-.2.5t-.5.2h-2.1v21.2q0 1.8-1.1 3.2t-2.5 1.3H10.9q-1.4 0-2.5-1.3t-1-3.1V11.4H5.2q-.3 0-.5-.2t-.2-.5V9.3q0-.3.2-.5t.5-.2h6.9l1.6-3.8q.3-.8 1.2-1.4t1.7-.5h7.2q.9 0 1.8.5t1.2 1.4l1.5 3.8h6.9q.3 0 .5.2t.2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTrashO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconTrashO;
//# sourceMappingURL=IconTrashO.js.map