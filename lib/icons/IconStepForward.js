import * as React from "react";
class IconStepForward extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--step-forward ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M9.5 36.9q-.4.4-.7.2t-.3-.7V3.6q0-.6.3-.7t.7.2L25.4 19l.2.4V4.3q0-.6.5-1t1-.4h2.8q.6 0 1 .4t.5 1v31.4q0 .6-.5 1t-1 .4h-2.8q-.6 0-1-.4t-.5-1V20.6l-.2.4z" }))),
            !p.textFirst && textEl));
    }
}
IconStepForward.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconStepForward;
//# sourceMappingURL=IconStepForward.js.map