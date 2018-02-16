import * as React from "react";
class IconUser extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--user ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M35.9 31.4q0 2.6-1.6 4.2T30 37.1H10.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.2.1-2.3t.3-2.5.6-2.4.9-2.2 1.4-1.8T9.7 19t2.5-.4q.2 0 1 .5t1.6 1 2.4 1.1 3 .5 3-.5 2.4-1.1 1.7-1 .9-.5q1.4 0 2.5.4t1.9 1.2T34 22t.9 2.2.6 2.4.4 2.5 0 2.3zm-7.1-20q0 3.6-2.5 6.1T20.2 20t-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z" }))),
            !p.textFirst && textEl));
    }
}
IconUser.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconUser;
//# sourceMappingURL=IconUser.js.map