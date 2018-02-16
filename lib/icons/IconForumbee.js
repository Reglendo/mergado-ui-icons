import * as React from "react";
class IconForumbee extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--forumbee ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M23.8 3.3q-7 2.7-12.4 8.1t-8 12.5Q3 22 3 20q0-4.6 2.3-8.6t6.2-6.2 8.6-2.3q1.8 0 3.7.4zM29.9 6q2 1.5 3.6 3.5-8.7 2.5-15 8.9T9.6 33.5q-2.1-1.6-3.5-3.6 2.5-8.6 8.9-15T29.9 6zM13.5 35.8q2.6-8 8.5-13.9t13.8-8.6q.9 2.1 1.2 4.4-6.5 2.7-11.5 7.7t-7.7 11.5q-2.3-.3-4.3-1.1zm23.8 1.3Q33 36 29.1 34.5q-3 1.9-6.5 2.4 2.5-4.6 6.1-8.3t8.3-6.1q-.5 3.4-2.3 6.3 1.5 3.9 2.6 8.3z" }))),
            !p.textFirst && textEl));
    }
}
IconForumbee.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconForumbee;
//# sourceMappingURL=IconForumbee.js.map