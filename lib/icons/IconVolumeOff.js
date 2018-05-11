import * as React from "react";
class IconVolumeOff extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--volume-off ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M28.6 7.9v24.2q0 .6-.4 1t-1 .5-1-.5l-7.4-7.4h-5.9q-.6 0-1-.4t-.4-1v-8.6q0-.6.4-1t1-.4h5.9l7.4-7.4q.4-.5 1-.5t1 .5.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconVolumeOff.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconVolumeOff;
//# sourceMappingURL=IconVolumeOff.js.map