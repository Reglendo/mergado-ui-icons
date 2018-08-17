import * as React from "react";
class IconCommenting extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--commenting ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M14.3 20q0-1.2-.9-2t-2-.9-2 .9-.8 2 .8 2 2 .9 2-.9.9-2zm8.6 0q0-1.2-.9-2t-2-.9-2 .9-.9 2 .9 2 2 .9 2-.9.9-2zm8.5 0q0-1.2-.8-2t-2-.9-2 .9-.9 2 .9 2 2 .9 2-.9.8-2zm8.6 0q0 3.9-2.7 7.2T30 32.4t-10 1.9q-2.5 0-4.7-.4-3.9 3.8-9.7 5.1-1.2.2-1.9.3-.3 0-.5-.1t-.3-.4q-.1-.4.4-.9l.5-.5q.4-.4.6-.5t.5-.5.6-.8.4-.8.5-1 .3-1.3.3-1.6Q3.7 28.8 1.9 26T0 20q0-3.9 2.7-7.2T10 7.6t10-1.9 10 1.9 7.3 5.2T40 20z" }))),
            !p.textFirst && textEl));
    }
}
IconCommenting.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCommenting;
//# sourceMappingURL=IconCommenting.js.map