import * as React from "react";
export const IconHourglass1 = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--hourglass-1 ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M34.4 2.9q0 5.8-2.3 10.3t-6 6.8q3.6 2.4 6 6.8t2.3 10.3h2.2q.3 0 .5.2t.2.6v1.4q0 .3-.2.5t-.5.2H3.7q-.3 0-.5-.2t-.2-.5v-1.4q0-.4.2-.6t.5-.2h2.2q0-5.8 2.3-10.3t6-6.8q-3.6-2.4-6-6.8T5.9 2.9H3.7q-.3 0-.5-.2T3 2.1V.7q0-.3.2-.5t.5-.2h32.9q.3 0 .5.2t.2.5v1.4q0 .4-.2.6t-.5.2h-2.2zm-2.8 0H8.7q0 1.4.2 2.8h22.5q.2-1.3.2-2.8zm0 34.2q0-2.9-.8-5.5t-2-4.7-2.8-3.4-3.3-2.1h-5.1q-1.7.7-3.3 2.1t-2.8 3.4-2 4.7-.8 5.5h22.9z" }))),
        !props.textFirst && textEl));
};
IconHourglass1.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHourglass1;
//# sourceMappingURL=IconHourglass1.js.map