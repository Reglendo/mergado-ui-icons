import * as React from "react";
class IconSitemap extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--sitemap ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M40 27.9V35q0 .9-.6 1.5t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.5v-7.1q0-.9.6-1.6t1.5-.6h2.2v-4.3H21.4v4.3h2.2q.9 0 1.5.6t.6 1.6V35q0 .9-.6 1.5t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.5v-7.1q0-.9.6-1.6t1.5-.6h2.2v-4.3H7.1v4.3h2.2q.9 0 1.5.6t.6 1.6V35q0 .9-.6 1.5t-1.5.6H2.1q-.9 0-1.5-.6T0 35v-7.1q0-.9.6-1.6t1.5-.6h2.2v-4.3q0-1.1.8-2t2-.8h11.5v-4.3h-2.2q-.9 0-1.5-.6t-.6-1.6V5q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5v7.1q0 .9-.6 1.6t-1.5.6h-2.2v4.3h11.5q1.1 0 2 .8t.8 2v4.3h2.2q.9 0 1.5.6t.6 1.6z" }))),
            !p.textFirst && textEl));
    }
}
IconSitemap.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSitemap;
//# sourceMappingURL=IconSitemap.js.map