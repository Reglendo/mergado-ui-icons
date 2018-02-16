import * as React from "react";
export const IconTumblrSquare = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--tumblr-square ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M28.4 32.6L27 28.5q-1 .5-2.3.5-.8 0-1.4-.2t-.9-.7-.4-.9-.1-1v-8.9h5.8V13h-5.8V5.7h-4.1q-.2 0-.2.2l-.4 2q-.2 1-.9 2.1t-1.7 2.1-2.7 1.5v3.7h2.9v9.4q0 1.2.5 2.5t1.5 2.5 2.7 1.9 3.9.7q1.5 0 3-.6t2-1.1zm8.9-23.3v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
        !props.textFirst && textEl));
};
IconTumblrSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTumblrSquare;
//# sourceMappingURL=IconTumblrSquare.js.map