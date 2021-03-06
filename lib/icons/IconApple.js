import * as React from "react";
class IconApple extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--apple ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M35.6 27.1q-.9 2.8-2.8 5.6-2.8 4.4-5.7 4.4-1.1 0-3.1-.7-1.9-.8-3.4-.8-1.3 0-3.2.8-1.8.7-2.9.7-3.4 0-6.7-5.7-3.3-5.9-3.3-11.3 0-5.1 2.5-8.3 2.5-3.2 6.4-3.2 1.6 0 3.9.6 2.3.7 3.1.7 1 0 3.2-.7 2.3-.8 3.8-.8 2.7 0 4.8 1.4 1.2.8 2.3 2.3-1.7 1.5-2.5 2.6-1.5 2.1-1.5 4.6 0 2.8 1.6 5t3.5 2.8zM27.2.9q0 1.4-.6 3.1-.7 1.7-2.1 3.1-1.2 1.2-2.4 1.6-.9.2-2.4.3.1-3.3 1.8-5.7Q23.1.9 27.1 0v.2q0 .1.1.3v.4z" }))),
            !p.textFirst && textEl));
    }
}
IconApple.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconApple;
//# sourceMappingURL=IconApple.js.map