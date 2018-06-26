import * as React from "react";
class IconTextHeight extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--text-height ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M38.9 31.4q.8 0 1 .4t-.3 1l-2.8 3.7q-.4.5-1.1.5t-1.1-.5l-2.8-3.7q-.4-.5-.2-1t.9-.4h1.8V8.6h-1.8q-.7 0-.9-.4t.2-1l2.8-3.7q.5-.5 1.1-.5t1.1.5l2.8 3.7q.5.5.3 1t-1 .4h-1.8v22.8h1.8zM1.8 2.9l1.2.6q.3.1 4.7.1 1 0 3-.1t2.9 0h12.6q.1 0 .4-.2t.4-.4h1.5q.1 2.5.1 7.5 0 1.8-.1 2.4-.9.3-1.6.4-.5-1-1.2-2.8 0-.2-.2-1.1t-.3-1.7-.2-.7q-.1-.2-.3-.3t-.3-.2-.3 0-.4 0-.4 0h-4.5q-.9 0-1.6.1-.2 1.8-.2 3.1v8.6q0 6.5.1 10.2 0 .4-.1 1.6t0 2 .3 1.6q.9.4 2.8.9t2.6.9q.2.8.2 1.1 0 .3-.1.6H22q-1.7.1-4.8-.1t-4.7-.3q-1.1 0-3.3.2t-3.4.2L5.7 36v-.2q.4-.6 1.4-1t2.2-.6 1.7-.6q.5-1 .5-8.6 0-2.2-.1-6.7t-.1-6.8V7.4q0-.4-.1-.5t-.1-.3q-.2-.3-3.6-.3-.7 0-2.1.3t-1.7.5q-.5.3-.8 1.7t-.7 2.4-.9 1.2q-1-.6-1.3-1V2.9z" }))),
            !p.textFirst && textEl));
    }
}
IconTextHeight.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTextHeight;
//# sourceMappingURL=IconTextHeight.js.map