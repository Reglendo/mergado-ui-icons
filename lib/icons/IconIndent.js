import * as React from "react";
class IconIndent extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--indent ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M7.9 18.6q0 .3-.2.5l-6.5 6.4q-.2.2-.5.2t-.5-.2T0 25V12.1q0-.2.2-.5t.5-.2q.3 0 .5.2l6.5 6.5q.2.2.2.5zM40 29.3v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h38.6q.3 0 .5.2t.2.5zm0-8.6V25q0 .3-.2.5t-.5.2H15q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h24.3q.3 0 .5.2t.2.5zm0-8.6v4.3q0 .3-.2.5t-.5.2H15q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2h24.3q.3 0 .5.2t.2.5zm0-8.5v4.3q0 .2-.2.5t-.5.2H.7q-.3 0-.5-.2T0 7.9V3.6q0-.3.2-.5t.5-.2h38.6q.3 0 .5.2t.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconIndent.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconIndent;
//# sourceMappingURL=IconIndent.js.map