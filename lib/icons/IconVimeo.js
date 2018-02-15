import * as React from "react";
export const IconVimeo = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--vimeo ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M38.1 11.6q-.2 5.2-7.4 14.5-7.4 9.6-12.5 9.6-3.2 0-5.4-5.9-.9-3.5-2.9-10.7-1.6-5.9-3.5-5.9-.4 0-2.9 1.7l-1.7-2.2q.6-.4 2.4-2.1T7.1 8q3.5-3.1 5.4-3.2 2.1-.2 3.4 1.2t1.8 4.5q1 6.4 1.5 8.4 1.2 5.5 2.7 5.5 1.1 0 3.4-3.6t2.5-5.5q.3-3.1-2.5-3.1-1.2 0-2.7.6Q25.3 4 32.9 4.3q5.6.2 5.2 7.3z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconVimeo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconVimeo.js.map