import * as React from "react";
class IconSortNumericDesc extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--sort-numeric-desc ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M33 6.5q0-1.5-.9-2.6t-2.3-1.2q-1.2 0-1.9.8t-.7 2.1.8 2.1 2.4.9q1.1 0 1.9-.6t.7-1.6zM19.4 32.1q0 .3-.2.6l-7.1 7.1q-.2.2-.5.2t-.5-.2l-7.2-7.1q-.3-.4-.1-.8.1-.5.6-.5h4.3V.7q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v30.7h4.3q.3 0 .5.2t.2.5zm16.1 5.4V40H25v-2.5h3.8V26.7h-.1l-.1.2q-.2.3-.6.7l-1.4 1.3-1.8-1.9 4.3-4.1h2.7v14.6h3.7zm.7-29.8q0 1.4-.3 2.8T35 13t-1.6 2.1-2.2 1.5-2.8.5q-1.4 0-2.4-.3-.5-.2-.9-.3l.8-2.6q.4.2.7.3.8.3 1.7.3 1.9 0 3-1.3t1.5-3.3h-.1q-.4.5-1.3.8t-1.9.4q-2.4 0-3.9-1.6t-1.5-3.9q0-2.3 1.6-4T29.8 0q2.7 0 4.5 2.1t1.9 5.6z" }))),
            !p.textFirst && textEl));
    }
}
IconSortNumericDesc.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSortNumericDesc;
//# sourceMappingURL=IconSortNumericDesc.js.map