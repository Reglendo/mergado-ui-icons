import * as React from "react";
class IconTumblr extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--tumblr ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M29.1 29.7l1.8 5.3q-.6.7-2.5 1.4t-4 .7q-2.3.1-4.2-.5T17 34.9t-2.1-2.4-1.3-2.6-.3-2.7V15.1H9.5v-4.8q1.6-.6 2.9-1.6t2-2 1.3-2.2.8-2.3.3-1.9q0-.1.1-.2t.2-.1h5.4v9.5H30v5.6h-7.5v11.5q0 .7.2 1.3t.5 1.2 1.1.9 1.8.3q1.7 0 3-.6z" }))),
            !p.textFirst && textEl));
    }
}
IconTumblr.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTumblr;
//# sourceMappingURL=IconTumblr.js.map