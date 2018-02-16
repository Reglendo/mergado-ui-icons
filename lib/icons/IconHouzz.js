import * as React from "react";
export const IconHouzz = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--houzz ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M19.9 26.6L31.4 20v13.2l-11.5 6.6V26.6zM8.5 20v13.2l11.4-6.6zM19.9.2v13.2L8.5 20V6.8zm0 13.2l11.5-6.6V20z" }))),
        !props.textFirst && textEl));
};
IconHouzz.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHouzz;
//# sourceMappingURL=IconHouzz.js.map