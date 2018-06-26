import * as React from "react";
class IconCreditCardAlt extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--credit-card-alt ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M0 30.6V20h40.3v10.6q0 1.2-.8 2t-2 .8H2.8q-1.2 0-2-.8t-.8-2zm11.2-3.9V29h6.7v-2.3h-6.7zm-6.7 0V29H9v-2.3H4.5zm33-20.1q1.2 0 2 .8t.8 2v3.9H0V9.4q0-1.2.8-2t2-.8h34.7z" }))),
            !p.textFirst && textEl));
    }
}
IconCreditCardAlt.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCreditCardAlt;
//# sourceMappingURL=IconCreditCardAlt.js.map