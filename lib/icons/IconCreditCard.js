import * as React from "react";
class IconCreditCard extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--credit-card ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M36.5 4.1q1.4 0 2.4.9t1 2.4v25.2q0 1.4-1 2.4t-2.4.9H3.3Q2 35.9 1 35t-1-2.4V7.4Q0 6 1 5t2.3-.9h33.2zM3.3 6.7q-.2 0-.4.2t-.2.5V12h34.5V7.4q0-.3-.2-.5t-.5-.2H3.3zm33.2 26.6q.3 0 .5-.2t.2-.5V20H2.7v12.6q0 .3.2.5t.4.2h33.2zM5.3 30.6V28h5.3v2.6H5.3zm8 0V28h8v2.6h-8z" }))),
            !p.textFirst && textEl));
    }
}
IconCreditCard.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCreditCard;
//# sourceMappingURL=IconCreditCard.js.map