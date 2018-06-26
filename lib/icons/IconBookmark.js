import * as React from "react";
class IconBookmark extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--bookmark ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.5 2.9q.5 0 1 .2.7.2 1.1.9t.5 1.4v28.7q0 .8-.5 1.4t-1.1.9q-.5.2-1 .2-1.1 0-1.9-.7l-9.8-9.5-9.9 9.5q-.8.7-1.8.7-.5 0-1-.2-.7-.3-1.2-.9t-.4-1.4V5.4q0-.8.4-1.4t1.2-.9q.5-.2 1-.2h23.4z" }))),
            !p.textFirst && textEl));
    }
}
IconBookmark.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBookmark;
//# sourceMappingURL=IconBookmark.js.map