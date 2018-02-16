import * as React from "react";
export const IconWikipediaW = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--wikipedia-w ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M26.2 33L21 20.8q-.4.9-2.8 5.4T14.7 33h-.9q-1.4-3.4-4.5-10.3T4.8 12.3q-.4-.9-1.2-1.9T1.8 8.6 0 7.9V7h10.2v.9q-.7 0-1.4.2t-1.1.8-.2 1.1q.4 1.1 3.8 8.8t4.1 9.4q.5-1.1 2.4-4.7t2.3-4.3q-.3-.7-2.2-4.9t-2.4-5.2q-.6-1.2-3.5-1.2V7h9v.8q-1 .1-1.6.5t-.2 1.2q.5 1.2 1.5 3.3t1.5 3.3q1.9-3.8 3-6.4.4-.9-.2-1.4t-2.2-.4V7h7.8v.8q-1.1.1-2.1.6t-1.6 1.4l-3.7 7.8q.2.6 2.2 5.1t2.1 4.8l7.7-17.8q-.2-.7-.8-1.1T33.2 8t-.9-.1V7l8 .1v.8q-2.4 0-3.5 2.5Q27.6 31.7 27 33h-.8z" }))),
        !props.textFirst && textEl));
};
IconWikipediaW.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconWikipediaW;
//# sourceMappingURL=IconWikipediaW.js.map