import * as React from "react";
export const IconCog = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--cog ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M25.9 20q0-2.4-1.7-4t-4.1-1.7-4 1.7-1.7 4 1.7 4 4 1.7 4.1-1.7 1.7-4zm11.4-2.4v4.9q0 .3-.2.5t-.4.3l-4.2.6q-.4 1.3-.8 2.1.7 1.1 2.3 3.1.3.2.3.5t-.2.5q-.6.9-2.2 2.4t-2.1 1.6q-.3 0-.6-.2l-3.1-2.4q-1 .5-2 .9-.4 3-.7 4.1-.1.6-.8.6h-4.9q-.3 0-.6-.1t-.2-.5l-.7-4.1q-1.1-.4-2-.9l-3.1 2.4q-.2.2-.6.2-.3 0-.5-.2-2.8-2.6-3.7-3.8-.2-.2-.2-.5 0-.2.2-.5.3-.5 1.1-1.5t1.2-1.5q-.6-1.2-.9-2.3l-4.1-.6q-.2 0-.4-.2t-.2-.6v-4.9q0-.3.2-.5t.4-.3l4.2-.7q.3-1 .8-2-.9-1.3-2.4-3.1-.2-.3-.2-.5t.2-.5q.6-.8 2.2-2.4t2.1-1.6q.3 0 .6.2l3.1 2.4q1-.5 2-.9.4-3 .7-4.1.1-.6.8-.6h4.9q.3 0 .6.1t.2.5l.7 4.1q1 .4 2 .9l3.1-2.4q.2-.2.6-.2.3 0 .5.2 2.9 2.6 3.7 3.8.2.2.2.5 0 .2-.2.5l-1.2 1.5-1.2 1.5q.6 1.2 1 2.2l4 .7q.3 0 .5.2t.2.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconCog.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconCog.js.map