import * as React from "react";
export const IconPencil = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--pencil ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M11.1 34.3l2-2L7.9 27l-2 2v2.4h2.8v2.9h2.4zm11.7-20.7q0-.5-.5-.5-.2 0-.4.1L9.8 25.3q-.1.2-.1.4 0 .5.4.5.3 0 .4-.2l12.1-12.1q.2-.1.2-.3zm-1.2-4.3l9.3 9.3-18.6 18.5H3v-9.2zm15.2 2.1q0 1.2-.8 2l-3.7 3.7L23 7.9l3.7-3.7q.8-.9 2-.9t2 .9L36 9.4q.8.9.8 2z" }))),
        !props.textFirst && textEl));
};
IconPencil.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPencil;
//# sourceMappingURL=IconPencil.js.map