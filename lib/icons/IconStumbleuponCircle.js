import * as React from "react";
class IconStumbleuponCircle extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--stumbleupon-circle ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M22.3 18.7l2-.6v-1.4q0-1.7-1.3-3t-3-1.2-3.1 1.2-1.3 3V23q0 .5-.3.8t-.8.3-.7-.3-.3-.8v-2.6h-3.4v2.7q0 1.8 1.3 3.1t3.1 1.3q1.8 0 3.1-1.3t1.3-3.1v-6.2q0-.4.3-.7t.8-.4q.4 0 .7.4t.3.7v1.2zm7.5 4.4v-2.7h-3.4v2.8q0 .4-.3.7t-.7.3q-.5 0-.8-.3t-.3-.7v-2.8l-2 .6-1.3-.6v2.7q0 1.8 1.3 3.1t3.1 1.3 3.1-1.3 1.3-3.1zm7.5-3.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconStumbleuponCircle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconStumbleuponCircle;
//# sourceMappingURL=IconStumbleuponCircle.js.map