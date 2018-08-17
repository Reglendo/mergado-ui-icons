import * as React from "react";
class IconBolt extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--bolt ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M29.8 12.6q.4.5.1 1l-12 25.8q-.3.6-1 .6h-.3q-.4-.2-.6-.5t-.1-.6l4.4-18.1-9 2.3H11q-.4 0-.7-.2-.4-.4-.3-.9l4.5-18.4q.1-.3.4-.5t.6-.2h7.3q.4 0 .7.2t.3.7q0 .2-.1.4l-3.8 10.3 8.8-2.2h.3q.4 0 .8.3z" }))),
            !p.textFirst && textEl));
    }
}
IconBolt.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBolt;
//# sourceMappingURL=IconBolt.js.map