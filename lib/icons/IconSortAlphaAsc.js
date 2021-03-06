import * as React from "react";
class IconSortAlphaAsc extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--sort-alpha-asc ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M27.6 9.1h3.9l-1.6-4.9-.2-1q-.1-.4-.1-.5h-.1v.5l-.1.4q-.1.4-.2.6zm-10.2 23q0 .3-.2.6l-7.1 7.1q-.2.2-.5.2t-.5-.2l-7.2-7.1q-.3-.4-.1-.8.1-.5.6-.5h4.3V.7q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v30.7h4.3q.3 0 .5.2t.2.5zm18.7 2.7V40h-13v-2l8.2-11.8q.3-.4.5-.6l.2-.2v-.1h-.3q-.3.1-.7.1h-5.2V28h-2.6v-5.1h12.6v1.9l-8.2 11.9q-.2.2-.5.6l-.2.2h6.5v-2.7h2.7zm2-20v2.3h-6.5v-2.3h1.7l-1-3.2h-5.5l-1 3.2h1.7v2.3h-6.4v-2.3h1.5L27.8 0h3.6l5.1 14.8h1.6z" }))),
            !p.textFirst && textEl));
    }
}
IconSortAlphaAsc.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSortAlphaAsc;
//# sourceMappingURL=IconSortAlphaAsc.js.map