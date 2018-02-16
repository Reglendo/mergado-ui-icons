import * as React from "react";
class IconMarsStrokeV extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--mars-stroke-v ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M21.8 14.4q4.8.5 8.1 4.2t3.3 8.5q0 3.8-1.9 6.9T26 38.7t-7.1 1.2q-3-.3-5.5-2t-4.1-4.1-1.8-5.6q-.2-3.5 1.2-6.5t4.2-5 6-2.3v-3h-3.5q-.4 0-.6-.2t-.2-.5V9.3q0-.3.2-.5t.6-.2h3.5V4.9l-2 2q-.2.2-.5.2t-.5-.2l-1.1-1q-.2-.2-.2-.5t.2-.5L19.4.4q.4-.4 1-.4t1 .4l4.5 4.5q.2.2.2.5t-.2.5l-1.1 1q-.2.2-.4.2t-.6-.2l-2-2v3.7h3.6q.3 0 .5.2t.2.5v1.4q0 .3-.2.5t-.5.2h-3.6v3zm-1.4 22.7q4.1 0 7-2.9t3-7.1-3-7-7-3-7.1 3-2.9 7 2.9 7.1 7.1 2.9z" }))),
            !p.textFirst && textEl));
    }
}
IconMarsStrokeV.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMarsStrokeV;
//# sourceMappingURL=IconMarsStrokeV.js.map