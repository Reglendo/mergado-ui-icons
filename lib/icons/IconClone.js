import * as React from "react";
export const IconClone = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--clone ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M37.1 36.4V12.1q0-.2-.2-.5t-.5-.2H12.1q-.2 0-.5.2t-.2.5v24.3q0 .3.2.5t.5.2h24.3q.3 0 .5-.2t.2-.5zM40 12.1v24.3q0 1.5-1 2.6t-2.6 1H12.1q-1.4 0-2.5-1t-1-2.6V12.1q0-1.4 1-2.5t2.5-1h24.3q1.5 0 2.6 1t1 2.5zm-8.6-8.5v3.5h-2.8V3.6q0-.3-.2-.5t-.5-.2H3.6q-.3 0-.5.2t-.2.5v24.3q0 .2.2.5t.5.2h3.5v2.8H3.6q-1.5 0-2.6-1t-1-2.5V3.6q0-1.5 1.1-2.5T3.6 0h24.3q1.4 0 2.5 1.1t1 2.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconClone.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconClone.js.map