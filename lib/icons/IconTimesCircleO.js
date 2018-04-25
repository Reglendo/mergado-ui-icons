import * as React from "react";
class IconTimesCircleO extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--times-circle-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M27.5 24.1l-3.3 3.2q-.2.3-.5.3t-.5-.3l-3.1-3-3 3q-.2.3-.5.3t-.5-.3l-3.3-3.2q-.2-.2-.2-.5t.2-.5l3.1-3.1-3.1-3.1q-.2-.2-.2-.5t.2-.5l3.3-3.2q.2-.3.5-.3t.5.3l3 3 3.1-3q.2-.3.5-.3t.5.3l3.3 3.2q.2.2.2.5t-.2.5L24.4 20l3.1 3.1q.2.2.2.5t-.2.5zm4.8-4.1q0-3.3-1.6-6.1t-4.5-4.4-6.1-1.6T14 9.5t-4.4 4.4T8 20t1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1zm5 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconTimesCircleO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTimesCircleO;
//# sourceMappingURL=IconTimesCircleO.js.map