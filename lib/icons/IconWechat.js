import * as React from "react";
class IconWechat extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--wechat ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M11.3 11.6q0-.8-.5-1.3t-1.3-.5q-.8 0-1.5.5t-.6 1.3q0 .7.6 1.2t1.5.5q.8 0 1.3-.5t.5-1.2zm14.4 9.8q0-.5-.5-1t-1.3-.4q-.5 0-.9.4t-.5 1q0 .5.5 1t.9.4q.8 0 1.3-.4t.5-1zm-4.6-9.8q0-.8-.5-1.3t-1.2-.5q-.9 0-1.5.5t-.7 1.3q0 .7.7 1.2t1.5.5q.7 0 1.2-.5t.5-1.2zm12.3 9.8q0-.5-.5-1t-1.2-.4q-.6 0-1 .4t-.4 1q0 .5.4 1t1 .4q.7 0 1.2-.4t.5-1zm-5.1-7.7q-.6-.1-1.4-.1-3.3 0-6 1.5t-4.4 4.1-1.6 5.5q0 1.5.5 3h-2.3q-.5 0-1.1-.1t-.8-.1-1.1-.2-1-.3l-4.9 2.5 1.4-4.2Q0 21.3 0 15.8q0-3.3 1.9-6.1T7 5.4t7.1-1.6q3.4 0 6.4 1.3t5.1 3.5 2.7 5.1zm11.5 10.9q0 2.3-1.4 4.3t-3.6 3.8l1.1 3.5-3.9-2.1q-2.9.7-4.2.7-3.3 0-6-1.4t-4.4-3.7-1.6-5.1 1.6-5.1 4.4-3.8 6-1.3q3.1 0 5.9 1.3t4.4 3.8 1.6 5.1z" }))),
            !p.textFirst && textEl));
    }
}
IconWechat.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconWechat;
//# sourceMappingURL=IconWechat.js.map