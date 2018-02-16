import * as React from "react";
class IconListUl extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--list-ul ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M8.6 31.4q0 1.8-1.3 3.1t-3 1.2-3.1-1.2T0 31.4t1.3-3 3-1.3 3 1.3 1.3 3zm0-11.4q0 1.8-1.3 3t-3 1.3T1.2 23 0 20t1.3-3 3-1.3 3 1.3 1.3 3zM40 29.3v4.3q0 .3-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h27.2q.3 0 .5.2t.2.5zM8.6 8.6q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3.1 3-1.2 3 1.2 1.3 3.1zM40 17.9v4.2q0 .3-.2.5t-.5.3H12.1q-.2 0-.5-.3t-.2-.5v-4.2q0-.3.2-.5t.5-.3h27.2q.3 0 .5.3t.2.5zm0-11.5v4.3q0 .3-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5V6.4q0-.3.2-.5t.5-.2h27.2q.3 0 .5.2t.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconListUl.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconListUl;
//# sourceMappingURL=IconListUl.js.map