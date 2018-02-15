import * as React from "react";
export const IconGlass = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--glass ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M37.9 4.2q0 .7-.9 1.7L22.9 20v17.1H30q.6 0 1 .5t.4 1-.4 1-1 .4H10q-.6 0-1-.4t-.4-1 .4-1 1-.5h7.1V20L3 5.9q-.9-1-.9-1.7 0-.6.4-.9t.8-.4 1 0h32.4q.5 0 .8.4t.4.9z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconGlass.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconGlass.js.map