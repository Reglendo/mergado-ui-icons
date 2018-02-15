import * as React from "react";
export const IconHourglassO = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--hourglass-o ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M34.4 2.9q0 5.8-2.3 10.3t-6 6.8q3.6 2.4 6 6.8t2.3 10.3h2.2q.3 0 .5.2t.2.6v1.4q0 .3-.2.5t-.5.2H3.7q-.3 0-.5-.2t-.2-.5v-1.4q0-.4.2-.6t.5-.2h2.2q0-5.8 2.3-10.3t6-6.8q-3.6-2.4-6-6.8T5.9 2.9H3.7q-.3 0-.5-.2T3 2.1V.7q0-.3.2-.5t.5-.2h32.9q.3 0 .5.2t.2.5v1.4q0 .4-.2.6t-.5.2h-2.2zM22.5 18.7q1.7-.7 3.3-2.1t2.9-3.4 2.1-4.7.8-5.6H8.7q0 2.9.8 5.6t2.1 4.7 2.9 3.4 3.3 2.1q.4.1.7.5t.2.8-.2.8-.7.5q-1.7.7-3.3 2.1t-2.9 3.4-2.1 4.7-.8 5.6h22.9q0-2.9-.8-5.6t-2.1-4.7-2.9-3.4-3.3-2.1q-.4-.1-.7-.5t-.2-.8.2-.8.7-.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconHourglassO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconHourglassO.js.map