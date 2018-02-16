import * as React from "react";
export const IconHourglass = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--hourglass ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M36.6 35.7q.3 0 .5.2t.2.5v2.9q0 .3-.2.5t-.5.2H3.7q-.3 0-.5-.2t-.2-.5v-2.9q0-.3.2-.5t.5-.2h32.9zM5.9 34.3q.1-1.2.4-2.4t.6-2.1 1.1-2 1.2-1.7 1.4-1.5 1.5-1.4 1.5-1.2 1.5-1 1.5-1q-1-.6-1.5-1t-1.5-1-1.5-1.2-1.5-1.4-1.4-1.5T8 12.2t-1.1-2-.6-2.1-.4-2.4h28.5q-.1 1.2-.4 2.4t-.6 2.1-1.1 2-1.2 1.7-1.4 1.5-1.5 1.4-1.6 1.2-1.4 1-1.5 1q1 .6 1.5 1t1.4 1 1.6 1.3 1.5 1.3 1.4 1.5 1.2 1.7 1.1 2 .6 2.1.4 2.4H5.9zM36.6 0q.3 0 .5.2t.2.5v2.9q0 .3-.2.5t-.5.2H3.7q-.3 0-.5-.2T3 3.6V.7q0-.3.2-.5t.5-.2h32.9z" }))),
        !props.textFirst && textEl));
};
IconHourglass.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHourglass;
//# sourceMappingURL=IconHourglass.js.map