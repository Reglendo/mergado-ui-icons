import * as React from "react";
class IconArrowsV extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--arrows-v ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M27.2 7.1q0 .6-.4 1t-1 .5h-2.9v22.8h2.9q.6 0 1 .5t.4 1-.4 1l-5.7 5.7q-.4.4-1 .4t-1-.4l-5.7-5.7q-.5-.5-.5-1t.5-1 1-.5h2.8V8.6h-2.8q-.6 0-1-.5t-.5-1 .5-1L19.1.4q.4-.4 1-.4t1 .4l5.7 5.7q.4.5.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconArrowsV.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowsV;
//# sourceMappingURL=IconArrowsV.js.map