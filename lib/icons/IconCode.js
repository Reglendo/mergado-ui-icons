import * as React from "react";
class IconCode extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--code ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M12.8 30.4l-1 1.1q-.2.2-.5.2t-.5-.2l-9.7-9.7q-.2-.2-.2-.5t.2-.4l9.7-9.7q.2-.2.5-.2t.5.2l1 1q.2.2.2.5t-.2.5l-8.1 8.1 8.1 8.2q.2.2.2.5t-.2.4zM25.1 8.3l-7.8 26.8q0 .3-.3.4t-.5.1l-1.3-.4q-.2-.1-.4-.3t0-.5l7.7-26.8q.1-.3.4-.4t.4-.1l1.3.4q.3 0 .4.3t.1.5zm13.6 13.5L29 31.5q-.2.2-.4.2t-.5-.2l-1-1.1q-.3-.2-.3-.4t.3-.5l8.1-8.2-8.1-8.1q-.3-.2-.3-.5t.3-.5l1-1q.2-.2.5-.2t.4.2l9.7 9.7q.2.2.2.4t-.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconCode.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCode;
//# sourceMappingURL=IconCode.js.map