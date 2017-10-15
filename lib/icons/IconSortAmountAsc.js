import * as React from "react";
class IconSortAmountAsc extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--sort-amount-asc ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M16 31.8q0 .3-.2.6l-6.9 6.9q-.3.2-.5.2-.3 0-.5-.2l-7-7q-.3-.3-.2-.7.2-.4.7-.4h4.2v-30q0-.3.2-.5t.5-.2h4.2q.3 0 .5.2t.2.5v30h4.1q.3 0 .5.1t.2.5zm23 2.8v4.2q0 .3-.2.5t-.5.2H20.2q-.3 0-.5-.2t-.2-.5v-4.2q0-.3.2-.5t.5-.2h18.1q.3 0 .5.2t.2.5zm-4.2-11.1v4.2q0 .3-.2.5t-.5.2H20.2q-.3 0-.5-.2t-.2-.5v-4.2q0-.3.2-.5t.5-.2h13.9q.4 0 .5.2t.2.5zm-4.1-11.2v4.2q0 .3-.2.5t-.5.2h-9.8q-.3 0-.5-.2t-.2-.5v-4.2q0-.3.2-.5t.5-.2H30q.3 0 .5.2t.2.5zM26.5 1.2v4.2q0 .3-.2.5t-.5.2h-5.6q-.3 0-.5-.2t-.2-.5V1.2q0-.3.2-.5t.5-.2h5.6q.3 0 .5.2t.2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconSortAmountAsc.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconSortAmountAsc;
//# sourceMappingURL=IconSortAmountAsc.js.map