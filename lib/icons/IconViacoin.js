import * as React from "react";
class IconViacoin extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--viacoin ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M37.3 0L33 10h4.3v4.3h-6.1l-1.3 2.8h7.4v4.3h-9.2l-8 18.6-7.9-18.6H3v-4.3h7.3l-1.2-2.8H3V10h4.3L3 0h5.7l7.2 17.1h8.5L31.6 0h5.7zM20.1 27.1l2.5-5.7h-4.9z" }))),
            !p.textFirst && textEl));
    }
}
IconViacoin.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconViacoin;
//# sourceMappingURL=IconViacoin.js.map