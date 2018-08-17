import * as React from "react";
class IconBriefcase extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--briefcase ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M14.3 5.7h11.4V2.9H14.3v2.8zM40 20v10.7q0 1.5-1 2.5t-2.6 1.1H3.6q-1.5 0-2.6-1.1t-1-2.5V20h15v3.6q0 .5.4 1t1 .4h7.2q.6 0 1-.4t.4-1V20h15zm-17.1 0v2.9h-5.8V20h5.8zM40 9.3v8.6H0V9.3q0-1.5 1.1-2.5t2.5-1.1h7.8V2.1q0-.8.7-1.5t1.5-.6h12.8q.9 0 1.5.6t.7 1.5v3.6h7.8q1.5 0 2.6 1.1t1 2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconBriefcase.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBriefcase;
//# sourceMappingURL=IconBriefcase.js.map