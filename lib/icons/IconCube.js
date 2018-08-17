import * as React from "react";
class IconCube extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--cube ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M21.5 36.4l14.3-7.8V14.4l-14.3 5.2v16.8zm-1.4-19.3l15.5-5.7-15.5-5.7-15.6 5.7zm18.5-5.7v17.2q0 .8-.4 1.4t-1.1 1.1l-15.7 8.5q-.6.4-1.3.4t-1.4-.4L3 31.1q-.7-.4-1.1-1.1t-.4-1.4V11.4q0-.9.5-1.6t1.4-1.1L19.1 3q.5-.1 1-.1t1 .1l15.7 5.8q.8.3 1.3 1t.5 1.6z" }))),
            !p.textFirst && textEl));
    }
}
IconCube.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCube;
//# sourceMappingURL=IconCube.js.map