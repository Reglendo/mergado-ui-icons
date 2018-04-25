import * as React from "react";
class IconVideoCamera extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--video-camera ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M40 7.9v24.2q0 1-.9 1.4-.3.1-.5.1-.6 0-1-.5l-9-8.9v3.7q0 2.6-1.9 4.5t-4.6 1.9H6.4q-2.6 0-4.5-1.9T0 27.9V12.1q0-2.6 1.9-4.5t4.5-1.9h15.7q2.7 0 4.6 1.9t1.9 4.5v3.7l9-8.9q.4-.5 1-.5.2 0 .5.1.9.4.9 1.4z" }))),
            !p.textFirst && textEl));
    }
}
IconVideoCamera.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconVideoCamera;
//# sourceMappingURL=IconVideoCamera.js.map