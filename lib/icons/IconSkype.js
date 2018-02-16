import * as React from "react";
class IconSkype extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--skype ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M29.2 23.7q0-1.1-.5-2t-1-1.5-1.7-1.1-1.8-.8-2-.5l-2.3-.5q-.6-.2-1-.3t-.7-.2-.7-.4-.4-.5-.1-.6q0-1.7 3.2-1.7.9 0 1.7.2t1.2.7.8.7.9.6 1.1.3q1.1 0 1.7-.7t.6-1.7q0-1.2-1.2-2.2T23.8 10t-4.1-.6q-1.5 0-2.9.4t-2.7 1-2 2-.7 2.8q0 1.4.4 2.4t1.3 1.7 1.8 1.1 2.3.7l3.2.8q2 .5 2.5.8.7.5.7 1.4 0 .8-.9 1.4t-2.3.6q-1.1 0-2.1-.4t-1.4-.8-1-1-1-.9-1.3-.4q-1.1 0-1.6.7t-.6 1.7q0 2 2.7 3.5t6.5 1.5q1.6 0 3.1-.5t2.8-1.1 2-2.1.7-3zm8.1 4.9q0 3.5-2.5 6t-6.1 2.5q-2.9 0-5.2-1.7-1.7.3-3.4.3-3.1 0-6.1-1.2t-5-3.4-3.3-5T4.4 20q0-1.6.4-3.4Q3 14.3 3 11.4q0-3.5 2.5-6t6.1-2.5q2.9 0 5.2 1.7 1.7-.3 3.3-.3 3.2 0 6.1 1.2t5.1 3.4 3.3 5 1.3 6.1q0 1.6-.4 3.3 1.8 2.4 1.8 5.3z" }))),
            !p.textFirst && textEl));
    }
}
IconSkype.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSkype;
//# sourceMappingURL=IconSkype.js.map