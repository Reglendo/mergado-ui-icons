import * as React from "react";
class IconStickyNote extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--sticky-note ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M25.9 27.9v9.2H5.1q-.8 0-1.5-.6T3 35V5q0-.9.6-1.5t1.5-.6h30q.9 0 1.6.6t.6 1.5v20.7H28q-.9 0-1.5.6t-.6 1.6zm2.8.7h8.5q-.3 1.8-1.4 2.9l-4.1 4.1q-1.2 1.1-3 1.5v-8.5z" }))),
            !p.textFirst && textEl));
    }
}
IconStickyNote.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconStickyNote;
//# sourceMappingURL=IconStickyNote.js.map