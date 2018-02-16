import * as React from "react";
class IconExpeditedssl extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--expeditedssl ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M20 1.4q-3.8 0-7.2 1.5t-5.9 4-4 5.9T1.4 20t1.5 7.2 4 5.9 5.9 4 7.2 1.5 7.2-1.5 5.9-4 4-5.9 1.5-7.2-1.5-7.2-4-5.9-5.9-4T20 1.4zM20 0q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4T40 20t-1.6 7.8-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0zm-8.9 18.6q.3 0 .3.3v10.7q0 .4-.3.4h-.7q-.4 0-.4-.4V18.9q0-.3.4-.3h.7zM20 20q1.2 0 2 .8t.9 2.1q0 .7-.4 1.4t-1.1 1v2.6q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5v-2.6q-.7-.4-1.1-1t-.4-1.4q0-1.2.9-2.1t2-.8zm0-17.1q4.7 0 8.6 2.3t6.2 6.2 2.3 8.6-2.3 8.6-6.2 6.2-8.6 2.3-8.6-2.3-6.2-6.2T2.9 20t2.3-8.6 6.2-6.2T20 2.9zm-7.9 10.7v2.1q0 .3.2.5t.6.2h1.4q.3 0 .5-.2t.2-.5v-2.1q0-2.1 1.5-3.6T20 8.6t3.5 1.4 1.5 3.6v2.1q0 .3.2.5t.5.2h1.4q.4 0 .6-.2t.2-.5v-2.1q0-3.3-2.3-5.6T20 5.7 14.4 8t-2.3 5.6zM31.4 30V18.6q0-.6-.4-1t-1-.5H10q-.6 0-1 .5t-.4 1V30q0 .6.4 1t1 .4h20q.6 0 1-.4t.4-1z" }))),
            !p.textFirst && textEl));
    }
}
IconExpeditedssl.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconExpeditedssl;
//# sourceMappingURL=IconExpeditedssl.js.map