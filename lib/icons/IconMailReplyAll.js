import * as React from "react";
class IconMailReplyAll extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--mail-reply-all ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M14.3 24.2v1.5q0 1-.9 1.3-.3.1-.5.1-.6 0-1-.4L.4 15.3q-.4-.4-.4-1t.4-1L11.9 1.9q.6-.7 1.5-.4.9.4.9 1.4v1.5l-8.9 8.9q-.4.4-.4 1t.4 1zM40 25q0 1.3-.4 3t-.8 3.1-1.1 2.8-.9 2l-.5.9q-.1.3-.6.3h-.2q-.5-.2-.5-.7 1-9-2.4-12.6-1.4-1.6-3.8-2.5t-5.9-1.2v5.6q0 1-.9 1.3-.3.1-.6.1-.6 0-1-.4L9 15.3q-.4-.4-.4-1t.4-1L20.4 1.9q.7-.7 1.6-.4.9.4.9 1.4v5.8q9.1.6 13.3 4.9Q40 17.5 40 25z" }))),
            !p.textFirst && textEl));
    }
}
IconMailReplyAll.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMailReplyAll;
//# sourceMappingURL=IconMailReplyAll.js.map