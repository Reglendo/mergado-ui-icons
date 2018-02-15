import * as React from "react";
export const IconLineChart = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--line-chart ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M39.8 32.4v2.5H0V5.1h2.5v27.3h37.3zM37.3 8.2v8.4q0 .5-.4.6t-.7-.1l-2.3-2.4L21.6 27q-.2.2-.5.2t-.4-.2l-4.5-4.5-8.1 8.1-3.8-3.8 11.4-11.3q.2-.2.4-.2t.5.2l4.5 4.5 9-9-2.3-2.4q-.3-.3-.2-.6t.6-.4h8.4q.3 0 .5.2t.2.4z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconLineChart.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconLineChart.js.map