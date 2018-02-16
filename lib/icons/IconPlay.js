import * as React from "react";
export const IconPlay = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--play ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M35.4 20.7L5.8 37.2q-.6.3-.9 0t-.4-.8V3.6q0-.6.4-.8t.9 0l29.6 16.5q.5.3.5.7t-.5.7z" }))),
        !props.textFirst && textEl));
};
IconPlay.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPlay;
//# sourceMappingURL=IconPlay.js.map