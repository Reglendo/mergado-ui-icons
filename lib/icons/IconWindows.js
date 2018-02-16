import * as React from "react";
export const IconWindows = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--windows ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M16.7 22.5V37L1.5 34.9V22.5h15.2zm0-16.6v14.7H1.5V8zm21.9 16.6V40l-20.2-2.8V22.5h20.2zm0-19.6v17.7H18.4v-15z" }))),
        !props.textFirst && textEl));
};
IconWindows.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconWindows;
//# sourceMappingURL=IconWindows.js.map