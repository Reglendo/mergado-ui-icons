import * as React from "react";
class IconAlignJustify extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--align-justify ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M40 30v2.9q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-8.6v2.9q0 .6-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1v-2.9q0-.5.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-8.5v2.8q0 .6-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1v-2.8q0-.6.4-1t1-.5h37.2q.5 0 1 .5t.4 1zm0-8.6v2.8q0 .6-.4 1t-1 .5H1.4q-.6 0-1-.5t-.4-1V4.3q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconAlignJustify.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconAlignJustify;
//# sourceMappingURL=IconAlignJustify.js.map