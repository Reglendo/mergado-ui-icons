import * as React from "react";
class IconTree extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--tree ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M36.6 32.9q0 .5-.5 1t-1 .4H24.8q.1.4.2 1.9t.1 2.5q0 .5-.4.9t-1 .4h-7.1q-.6 0-1-.4t-.4-.9q0-.9.1-2.5t.2-1.9H5.1q-.5 0-1-.4t-.4-1 .4-1l9-9H8q-.6 0-1-.5t-.4-1 .4-1l9-9h-4.4q-.6 0-1-.4t-.5-1 .5-1L19.1.4q.5-.4 1-.4t1 .4L29.7 9q.4.4.4 1t-.4 1-1 .4h-4.4l9 9q.4.4.4 1t-.4 1-1 .5h-5.1l8.9 8.9q.5.5.5 1.1z" }))),
            !p.textFirst && textEl));
    }
}
IconTree.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTree;
//# sourceMappingURL=IconTree.js.map