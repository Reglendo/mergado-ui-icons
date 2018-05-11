import * as React from "react";
class IconMapO extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--map-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M39.2 2.8q.6.4.6 1.1v27.3q0 .4-.3.7t-.5.4l-12.4 5q-.5.2-1 0l-11.9-4.8-12 4.8q-.2.1-.5.1t-.7-.2q-.5-.4-.5-1.1V8.8q0-.4.2-.7t.6-.4l12.4-5q.5-.2.9 0l12 4.8L38 2.7q.7-.2 1.2.1zM14.3 5.4v24.7l11.2 4.5V9.9zM2.5 9.7v24.6L13 30.1V5.4zm34.8 20.6V5.7L26.7 9.9v24.7z" }))),
            !p.textFirst && textEl));
    }
}
IconMapO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMapO;
//# sourceMappingURL=IconMapO.js.map