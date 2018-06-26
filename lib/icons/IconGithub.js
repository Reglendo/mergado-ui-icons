import * as React from "react";
class IconGithub extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--github ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-.6.1-.9-.2t-.3-.7v-4.7q0-2.1-1.2-3.1 1.3-.2 2.3-.4t2.1-.9 1.8-1.5 1.2-2.3.5-3.4q0-2.7-1.8-4.6.8-2-.2-4.5-.6-.2-1.8.2t-2 1l-.9.5q-2-.6-4.3-.6t-4.2.6q-.4-.2-1-.6t-1.9-.8-1.9-.3q-1 2.5-.1 4.5-1.8 1.9-1.8 4.6 0 1.9.5 3.4t1.1 2.3 1.8 1.5 2.1.9 2.3.4q-.9.8-1.1 2.3-.4.2-1 .3t-1.3.1-1.4-.5-1.3-1.4q-.4-.7-1-1.1t-1.1-.6h-.5q-.5 0-.6.1t-.1.2.2.3.2.3l.2.1q.5.2 1 .9t.7 1.1l.2.5q.3.9 1 1.4t1.5.7 1.5.1 1.3-.1h.5v3.1q0 .5-.3.7t-.9.2q-5.2-1.7-8.4-6.2T3 20q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3zM9.5 27.5q.1-.2-.2-.3-.2-.1-.2.1-.1.1.1.2.2.2.3 0zm.7.7q.1-.1-.1-.3-.2-.2-.3-.1-.2.1 0 .4.3.2.4 0zm.7 1q.2-.1 0-.4-.2-.3-.4-.1-.2.1 0 .4t.4.1zm.9 1q.2-.2-.1-.4-.3-.3-.4-.1-.2.2 0 .4.3.3.5.1zm1.3.5q0-.2-.3-.3-.4-.1-.4.1t.2.4q.4.1.5-.2zm1.4.1q0-.2-.4-.2t-.4.2q0 .3.4.3t.4-.3zm1.3-.2q-.1-.2-.4-.2-.4.1-.3.4t.4.1.3-.3z" }))),
            !p.textFirst && textEl));
    }
}
IconGithub.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGithub;
//# sourceMappingURL=IconGithub.js.map