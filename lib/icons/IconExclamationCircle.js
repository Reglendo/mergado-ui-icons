import * as React from "react";
class IconExclamationCircle extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--exclamation-circle ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3zM23 30.7v-4.2q0-.4-.2-.6t-.5-.2H18q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h4.3q.3 0 .5-.2t.2-.5zm0-7.7l.4-13.8q0-.3-.3-.5-.2-.1-.5-.1h-4.9q-.3 0-.5.1-.3.2-.3.4l.4 13.9q0 .2.2.4t.6.2h4.1q.3 0 .5-.2t.3-.4z" }))),
            !p.textFirst && textEl));
    }
}
IconExclamationCircle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconExclamationCircle;
//# sourceMappingURL=IconExclamationCircle.js.map