import * as React from "react";
class IconDesktop extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--desktop ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M37.2 22V4.7q0-.3-.2-.4t-.5-.2H3.3q-.2 0-.4.2t-.2.4V22q0 .3.2.5t.4.2h33.2q.3 0 .5-.2t.2-.5zm2.7-17.3v22.6q0 1.4-1 2.4t-2.4.9H25.2q0 .8.4 1.6t.6 1.5.4.9q0 .6-.4 1t-1 .3H14.6q-.5 0-.9-.3t-.4-1q0-.3.3-.9t.7-1.5.3-1.6H3.3q-1.3 0-2.3-.9t-1-2.4V4.7q0-1.4 1-2.3t2.3-1h33.2q1.4 0 2.4 1t1 2.3z" }))),
            !p.textFirst && textEl));
    }
}
IconDesktop.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconDesktop;
//# sourceMappingURL=IconDesktop.js.map