import * as React from "react";
class IconDeviantart extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--deviantart ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.4 6.8l-6.8 13 .5.6h6.3v9.3H20l-.9.7-3.2 6.1-.7.6H8.5v-6.7l6.8-13-.6-.7H8.5V7.4h11.3l1-.6L24 .7l.6-.7h6.8v6.8z" }))),
            !p.textFirst && textEl));
    }
}
IconDeviantart.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconDeviantart;
//# sourceMappingURL=IconDeviantart.js.map