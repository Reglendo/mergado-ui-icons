import * as React from "react";
class IconLongArrowDown extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--long-arrow-down ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M28.6 29q.2.4-.1.8l-7.9 8.6q-.2.2-.5.2t-.5-.2l-7.9-8.6q-.3-.4-.1-.8.2-.4.6-.4h5V.7q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v27.9h5q.5 0 .7.4z" }))),
            !p.textFirst && textEl));
    }
}
IconLongArrowDown.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconLongArrowDown;
//# sourceMappingURL=IconLongArrowDown.js.map