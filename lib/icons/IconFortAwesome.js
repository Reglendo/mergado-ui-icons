import * as React from "react";
class IconFortAwesome extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--fort-awesome ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M15.8 22.5v-5q0-.4-.4-.4h-2.1q-.4 0-.4.4v5q0 .4.4.4h2.1q.4 0 .4-.4zm11.4 0v-5q0-.4-.3-.4h-2.2q-.3 0-.3.4v5q0 .4.3.4h2.2q.3 0 .3-.4zm11.4.7V40H24.4v-7.1q0-1.8-1.3-3.1t-3-1.2-3.1 1.2-1.2 3.1V40H1.5V23.2q0-.3.4-.3H4q.4 0 .4.3v2.5h2.8V11.8q0-.4.4-.4h2.1q.4 0 .4.4v2.5h2.8v-2.5q0-.4.4-.4h2.1q.4 0 .4.4v2.5h2.8v-2.5q0-.4.4-.4h.4V2.7q-.8-.5-.8-1.3 0-.6.5-1t1-.4 1 .4.4 1q0 .8-.7 1.3v.2h6.1q.3 0 .3.3v5q0 .4-.3.4h-6.1v2.8h.3q.4 0 .4.4v2.5h2.9v-2.5q0-.4.3-.4h2.2q.3 0 .3.4v2.5h2.9v-2.5q0-.4.3-.4h2.2q.3 0 .3.4v13.9h2.9v-2.5q0-.3.3-.3h2.2q.3 0 .3.3z" }))),
            !p.textFirst && textEl));
    }
}
IconFortAwesome.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFortAwesome;
//# sourceMappingURL=IconFortAwesome.js.map