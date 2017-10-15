import * as React from "react";
class IconListUl extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--list-ul ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M8.6 31.4q0 1.8-1.3 3.1t-3 1.2-3.1-1.2T0 31.4t1.3-3 3-1.3 3 1.3 1.3 3zm0-11.4q0 1.8-1.3 3t-3 1.3T1.2 23 0 20t1.3-3 3-1.3 3 1.3 1.3 3zM40 29.3v4.3q0 .3-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h27.2q.3 0 .5.2t.2.5zM8.6 8.6q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3.1 3-1.2 3 1.2 1.3 3.1zM40 17.9v4.2q0 .3-.2.5t-.5.3H12.1q-.2 0-.5-.3t-.2-.5v-4.2q0-.3.2-.5t.5-.3h27.2q.3 0 .5.3t.2.5zm0-11.5v4.3q0 .3-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5V6.4q0-.3.2-.5t.5-.2h27.2q.3 0 .5.2t.2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconListUl.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconListUl;
//# sourceMappingURL=IconListUl.js.map