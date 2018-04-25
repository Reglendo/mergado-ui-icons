import * as React from "react";
class IconPaperPlaneO extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--paper-plane-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M39.4.2q.7.6.6 1.5L34.3 36q-.1.6-.7 1-.4.1-.7.1-.3 0-.6-.1l-11.7-4.8-6.7 7.3q-.4.5-1 .5-.4 0-.6-.1-.4-.1-.6-.5t-.3-.8V28.5L.9 24.2q-.8-.3-.9-1.3-.1-.8.7-1.3L37.9.2q.7-.5 1.5 0zm-7.7 33.5l5-29.5-32 18.4 7.5 3.1 19.2-14.3-10.6 17.8z" }))),
            !p.textFirst && textEl));
    }
}
IconPaperPlaneO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPaperPlaneO;
//# sourceMappingURL=IconPaperPlaneO.js.map