import * as React from "react";
export const IconInfo = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--info ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M27.3 30v2.9q0 .5-.4 1t-1 .4H14.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h1.5V20h-1.5q-.6 0-1-.4t-.4-1v-2.9q0-.6.4-1t1-.4H23q.6 0 1 .4t.4 1v12.9h1.5q.5 0 1 .4t.4 1zM24.4 4.3v4.3q0 .6-.4 1t-1 .4h-5.7q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4H23q.6 0 1 .4t.4 1z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconInfo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconInfo.js.map