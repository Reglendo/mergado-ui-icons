import * as React from "react";
class IconColumns extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--columns ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M5.1 34.3h13.5V8.6H4.4v25q0 .3.2.5t.5.2zm30.7-.7v-25H21.5v25.7h13.6q.3 0 .5-.2t.2-.5zm2.8-27.2v27.2q0 1.4-1 2.5t-2.5 1h-30q-1.5 0-2.5-1t-1.1-2.5V6.4q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconColumns.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconColumns;
//# sourceMappingURL=IconColumns.js.map