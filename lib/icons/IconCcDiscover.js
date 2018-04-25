import * as React from "react";
class IconCcDiscover extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--cc-discover ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M5.5 17.9q0 .9-.7 1.5-.5.4-1.5.4H3V16h.3q1.1 0 1.5.5.7.5.7 1.4zm31.1-1.1q0 .9-1.1.9h-.4v-1.8h.4q1.1 0 1.1.9zM6.7 17.9q0-1.3-.9-2.1T3.5 15H1.9v5.8h1.6q1.3 0 2.1-.6 1.1-.9 1.1-2.3zm.5 2.9h1.1V15H7.2v5.8zm5.6-1.7q0-.7-.4-1.1t-1.3-.8q-.5-.1-.7-.3t-.2-.4q0-.3.3-.5t.6-.2q.5 0 .9.5l.6-.7q-.7-.7-1.7-.7-.8 0-1.3.5T9 16.6q0 .6.4.9t1.1.7q.6.2.8.3.3.2.3.6 0 .4-.2.6t-.7.2q-.8 0-1.2-.7l-.7.7q.7 1.1 2 1.1.9 0 1.4-.6t.6-1.3zm4.8 1.5v-1.3q-.6.6-1.3.6-.9 0-1.4-.5t-.6-1.5q0-.8.6-1.4t1.3-.6q.8 0 1.4.7v-1.4q-.7-.3-1.4-.3-1.3 0-2.2.9t-.9 2.1.9 2.2 2.2.9q.8 0 1.4-.4zm21.6 10.6V22q-1.1.7-2.5 1.5t-4.2 2-5.7 2.4-7.3 2.4-8.9 2h27.5q.4 0 .8-.3t.3-.8zM24.3 18q0-1.4-.9-2.3t-2.3-.9-2.2.9T18 18t.9 2.2 2.2.9 2.3-.9.9-2.2zm2.7 3l2.5-6h-1.2l-1.6 3.9-1.6-3.9h-1.2l2.5 6h.6zm3-.2h3.2v-1h-2.1v-1.5h2.1v-1h-2.1V16h2.1v-1H30v5.8zm6.9 0h1.4l-1.9-2.4q1.3-.3 1.3-1.7 0-.8-.5-1.3t-1.5-.4H34v5.8h1.1v-2.3h.2zm3.4-11.9v22.2q0 1-.6 1.7t-1.7.6H2.3q-1 0-1.6-.6T0 31.1V8.9q0-1 .7-1.7t1.6-.6H38q1 0 1.7.6t.6 1.7z" }))),
            !p.textFirst && textEl));
    }
}
IconCcDiscover.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCcDiscover;
//# sourceMappingURL=IconCcDiscover.js.map