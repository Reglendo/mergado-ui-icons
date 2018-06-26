import * as React from "react";
class IconMapPin extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--map-pin ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M19.9 24.3q1.5 0 2.9-.3v14.6q0 .6-.4 1t-1 .4h-2.9q-.6 0-1-.4t-.4-1V24q1.3.3 2.8.3zm0-24.3q4.8 0 8.1 3.3t3.4 8.1-3.4 8.1-8.1 3.4-8.1-3.4-3.3-8.1 3.3-8.1T19.9 0zm0 5q.3 0 .5-.2t.2-.5-.2-.5-.5-.2q-3.2 0-5.5 2.3t-2.3 5.5q0 .3.2.5t.5.2.5-.2.2-.5q0-2.6 1.9-4.5T19.9 5z" }))),
            !p.textFirst && textEl));
    }
}
IconMapPin.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMapPin;
//# sourceMappingURL=IconMapPin.js.map