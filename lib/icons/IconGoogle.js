import * as React from "react";
class IconGoogle extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--google ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M20.1 17.5h16.2q.3 1.5.3 2.9 0 4.8-2 8.7T28.8 35t-8.7 2.1q-3.5 0-6.6-1.3T8 32.1t-3.7-5.4T3 20t1.3-6.7T8 7.9t5.5-3.7 6.6-1.3q6.7 0 11.5 4.4L27 11.8q-2.8-2.6-6.9-2.6-2.8 0-5.3 1.4t-3.9 4T9.5 20t1.4 5.4 3.9 4 5.3 1.4q2 0 3.6-.5t2.7-1.3 1.8-1.9 1.2-1.9.5-1.8h-9.8v-5.9z" }))),
            !p.textFirst && textEl));
    }
}
IconGoogle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGoogle;
//# sourceMappingURL=IconGoogle.js.map