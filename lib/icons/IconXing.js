import * as React from "react";
class IconXing extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--xing ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M17.8 14.9q-.2.4-5.7 10.2-.6 1-1.5 1H5.3q-.5 0-.7-.4t0-.8l5.7-10-3.6-6.2q-.3-.5-.1-.9.2-.3.8-.3h5.3q.9 0 1.5 1zM35.8.6q.3.3 0 .8L24 22.2v.1L31.5 36q.3.4.1.8-.3.3-.8.3h-5.3q-.9 0-1.5-1l-7.5-13.8L28.3 1.2q.6-1 1.4-1h5.4q.5 0 .7.4z" }))),
            !p.textFirst && textEl));
    }
}
IconXing.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconXing;
//# sourceMappingURL=IconXing.js.map