import * as React from "react";
class IconInfo extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--info ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M27.3 30v2.9q0 .5-.4 1t-1 .4H14.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h1.5V20h-1.5q-.6 0-1-.4t-.4-1v-2.9q0-.6.4-1t1-.4H23q.6 0 1 .4t.4 1v12.9h1.5q.5 0 1 .4t.4 1zM24.4 4.3v4.3q0 .6-.4 1t-1 .4h-5.7q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4H23q.6 0 1 .4t.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconInfo.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconInfo;
//# sourceMappingURL=IconInfo.js.map