import * as React from "react";
export const IconCreditCardAlt = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--credit-card-alt ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M0 30.6V20h40.3v10.6q0 1.2-.8 2t-2 .8H2.8q-1.2 0-2-.8t-.8-2zm11.2-3.9V29h6.7v-2.3h-6.7zm-6.7 0V29H9v-2.3H4.5zm33-20.1q1.2 0 2 .8t.8 2v3.9H0V9.4q0-1.2.8-2t2-.8h34.7z" }))),
        !props.textFirst && textEl));
};
IconCreditCardAlt.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCreditCardAlt;
//# sourceMappingURL=IconCreditCardAlt.js.map