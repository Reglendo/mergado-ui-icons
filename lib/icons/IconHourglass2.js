import * as React from "react";
export const IconHourglass2 = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--hourglass-2 ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M34.4 2.9q0 5.8-2.3 10.3t-6 6.8q3.6 2.4 6 6.8t2.3 10.3h2.2q.3 0 .5.2t.2.6v1.4q0 .3-.2.5t-.5.2H3.7q-.3 0-.5-.2t-.2-.5v-1.4q0-.4.2-.6t.5-.2h2.2q0-5.8 2.3-10.3t6-6.8q-3.6-2.4-6-6.8T5.9 2.9H3.7q-.3 0-.5-.2T3 2.1V.7q0-.3.2-.5t.5-.2h32.9q.3 0 .5.2t.2.5v1.4q0 .4-.2.6t-.5.2h-2.2zm-2.8 0H8.7q0 4.6 1.9 8.5h19.1q1.9-3.9 1.9-8.5zM30.3 30q-1.2-3.1-3.2-5.4t-4.4-3.2h-5.1q-2.3 1-4.4 3.2T10 30h20.3z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconHourglass2.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconHourglass2.js.map