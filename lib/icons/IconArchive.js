import * as React from "react";
class IconArchive extends React.Component {
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
                    React.createElement("path", { d: "M24.3 18.6q0-.6-.4-1t-1-.5h-5.8q-.5 0-1 .5t-.4 1 .4 1 1 .4h5.8q.5 0 1-.4t.4-1zm12.8-4.3v21.4q0 .6-.4 1t-1 .4H4.3q-.6 0-1-.4t-.4-1V14.3q0-.6.4-1t1-.4h31.4q.6 0 1 .4t.4 1zm1.5-10V10q0 .6-.5 1t-1 .4H2.9q-.6 0-1-.4t-.5-1V4.3q0-.6.5-1t1-.4h34.2q.6 0 1 .4t.5 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconArchive.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconArchive;
//# sourceMappingURL=IconArchive.js.map