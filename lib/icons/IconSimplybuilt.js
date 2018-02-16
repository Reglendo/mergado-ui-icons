import * as React from "react";
class IconSimplybuilt extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--simplybuilt ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M16.8 22.6q0-2.1-1.6-3.7t-3.7-1.5-3.7 1.5-1.6 3.7 1.6 3.7 3.7 1.6 3.7-1.6 1.6-3.7zm16.7 0q0-2.2-1.5-3.7t-3.7-1.5-3.8 1.5-1.5 3.7q0 2.2 1.5 3.7t3.8 1.6 3.7-1.6 1.5-3.7zm6.3-15.7v26.2q0 .8-.7 1.4t-1.4.7H2.1q-.9 0-1.5-.7T0 33.1V6.9q0-.8.6-1.4t1.5-.7h8.4q.8 0 1.4.7t.7 1.4V10h14.6V6.9q0-.8.6-1.4t1.5-.7h8.4q.8 0 1.4.7t.7 1.4z" }))),
            !p.textFirst && textEl));
    }
}
IconSimplybuilt.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSimplybuilt;
//# sourceMappingURL=IconSimplybuilt.js.map