import * as React from "react";
class IconInbox extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--inbox ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M25.8 21.4h7.1l-.1-.1q-.1-.1 0-.2L28 10H12.2L7.5 21.1v.2q0 .2-.1.1h7.1l2.1 4.3h7.1zm11.5.7v10.8q0 .5-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V22.1q0-1.4.6-2.7L8.9 7q.2-.5.8-.9t1.2-.4h18.5q.6 0 1.2.4t.8.9l5.3 12.4q.6 1.3.6 2.7z" }))),
            !p.textFirst && textEl));
    }
}
IconInbox.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconInbox;
//# sourceMappingURL=IconInbox.js.map